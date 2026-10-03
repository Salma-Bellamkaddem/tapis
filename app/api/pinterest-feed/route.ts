import { NextResponse } from "next/server";
import { rugsData } from "@/data/products";

const SITE_URL = "https://www.rugsberber.com";

function cleanPrice(price: string): string {
  const numericPrice = price.replace(/[^0-9.,]/g, "").replace(",", ".");
  return `${numericPrice} USD`;
}

function csvEscape(value: string): string {
  return `"${String(value).replace(/"/g, '""')}"`;
}

export async function GET() {
  const headers = [
    "id",
    "title",
    "description",
    "link",
    "image_link",
    "price",
    "availability",
    "product_type",
    "brand",
    "additional_image_link",
  ];

  const rows = rugsData.map((rug) => {
    const productUrl = `${SITE_URL}/products/${rug.id}`;

    const availability = rug.isAvailable
      ? "in stock"
      : "out of stock";

    return [
      rug.sku || rug.id,
      rug.name,
      rug.description || "",
      productUrl,
      rug.images[0] || "",
      cleanPrice(rug.price),
      availability,
      `Home & Garden > Decor > Rugs`,
      "RugsBerber",
      rug.images.slice(1, 11).join(", "),
    ].map(csvEscape);
  });

  const csv = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}