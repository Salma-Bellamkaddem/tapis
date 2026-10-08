import { collectionsData, rugsData, type Rug } from "@/data/products";

export type Collection = (typeof collectionsData)[number];

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // ï -> i
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// variantes de nommage -> slug officiel de collectionsData
const ALIASES: Record<string, string> = {
  ouaouzguite: "ouaouzguit",
  picassoberber: "picasso",
  tapistableau: "tableau",
};

export function getCollectionSlug(category: string): string {
  const key = normalize(category);
  return ALIASES[key] ?? key;
}

export function getCollectionByCategory(category: string): Collection | undefined {
  const slug = getCollectionSlug(category);
  return collectionsData.find((c) => c.slug === slug);
}

/**
 * Produits liés, sans aléatoire (évite les erreurs d'hydratation) :
 * 1. même collection, 2. autres collections.
 * On part du produit suivant dans la liste (rotation) : chaque page
 * pointe vers des voisins différents, donc le maillage est réparti.
 * Les produits disponibles passent avant les produits vendus.
 */
export function getRelatedRugs(rug: Rug, limit = 3): Rug[] {
  const slug = getCollectionSlug(rug.category);
  const idx = rugsData.findIndex((r) => r.id === rug.id);

  const rotated =
    idx < 0
      ? rugsData
      : [...rugsData.slice(idx + 1), ...rugsData.slice(0, idx)];

  const byAvailability = (a: Rug, b: Rug) =>
    Number(b.isAvailable) - Number(a.isAvailable);

  const same = rotated
    .filter((r) => getCollectionSlug(r.category) === slug)
    .sort(byAvailability);
  const others = rotated
    .filter((r) => getCollectionSlug(r.category) !== slug)
    .sort(byAvailability);

  return [...same, ...others].slice(0, limit);
}

// Autres collections à suggérer (maillage collection ↔ collection)
export function getOtherCollections(currentSlug: string | undefined, limit = 3): Collection[] {
  return collectionsData.filter((c) => c.slug !== currentSlug).slice(0, limit);
}