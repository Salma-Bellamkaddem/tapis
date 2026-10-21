// Fonction pour appliquer 30% de réduction sur un prix (ex: "$350" -> "$245")
export function applyBlackFridayDiscount(priceString: string): string {
  // Extraire le nombre de la chaîne (ex: "$350" -> 350)
  const numericPrice = parseFloat(priceString.replace(/[^0-9.]/g, ""));
  if (isNaN(numericPrice)) return priceString;

  // Appliquer 30% de réduction (il reste 70% du prix)
  const discountedPrice = Math.round(numericPrice * 0.7);

  // Conserver le même format (suppose que les prix commencent par $)
  return `$${discountedPrice}`;
}