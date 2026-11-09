import { NextResponse } from "next/server";
import { rugsData } from "@/data/products";

const SITE_URL = "https://rugsberber.com";

export async function GET() {
  // 1. En-têtes du fichier CSV exigés par Meta (Facebook / Instagram)
  const headers = [
    "id",
    "title",
    "description",
    "availability",
    "condition",
    "price",
    "link",
    "image_link",
    "brand",
    "google_product_category",
  ];

  const rows = [headers.join(",")];

  // 2. Parcourir chaque tapis pour remplir les lignes
  for (const rug of rugsData) {
    const id = rug.id;
    // Nettoyer les guillemets et retours à la ligne dans le titre et la description
    const title = `"${(rug.name || "").replace(/"/g, '""')}"`;
    const description = `"${(rug.description || "").replace(/"/g, '""').replace(/\n/g, " ")}"`;
    
    // Disponibilité Meta : "in stock" ou "out of stock"
    const availability = rug.isAvailable !== false ? "in stock" : "out of stock";
    const condition = "new";
    
    // Prix (ex: "350 USD")
    const priceValue = rug.sizes?.[0]?.price || rug.price || "$0";
    const cleanPrice = priceValue.replace(/[^0-9.]/g, "");
    const price = `${cleanPrice} USD`;

    // Liens URL
    const link = `${SITE_URL}/rugs/${rug.id}`;
    const image_link = rug.images?.[0] || "";
    const brand = "Cooperative Berber Rugs";
    const google_product_category = "Home & Garden > Decor > Rugs";

    const row = [
      id,
      title,
      description,
      availability,
      condition,
      price,
      link,
      image_link,
      brand,
      `"${google_product_category}"`,
    ];

    rows.push(row.join(","));
  }

  // 3. Assembler tout le contenu CSV
  const csvContent = rows.join("\n");

  // 4. Renvoyer la réponse HTTP avec le bon type de fichier (text/csv)
  return new NextResponse(csvContent, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="datafeed.csv"',
    },
  });
}