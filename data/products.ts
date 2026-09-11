export interface RugSize {
  size: string;
  price: string;
}

export interface Rug {
  id: string;
  name: string;
  sku: string;
  dimensions?: string;
  price: string;
  isAvailable: boolean;
  images: string[];
  category: string;
  sizes: RugSize[];
  description?: string;
}

export const rugsData: Rug[] = [
  {
    id: "atlas-001",
    name: "Atlas",
    sku: "BR-001",
    price: "1 500 DH",
    isAvailable: true,
    images: [
      "/placeholders/atlas-1.jpg", 
      "/placeholders/atlas-2.jpg", 
      "/placeholders/atlas-3.jpg"
    ],
    category: "Beni Ourain",
    sizes: [
      { size: "100 × 150 cm", price: "900 DH" },
      { size: "150 × 200 cm", price: "1 500 DH" },
      { size: "160 × 230 cm", price: "1 900 DH" },
      { size: "200 × 300 cm", price: "2 600 DH" },
      { size: "250 × 350 cm", price: "3 500 DH" },
      { size: "300 × 400 cm", price: "4 600 DH" },
    ],
    description: "A minimalist masterpiece handwoven by Beni Ourain artisans, featuring iconic dark geometric lines on thick, plush natural white wool from the Atlas mountains."
  },
  {
    id: "glaoui-001",
    name: "Glaoui Berber Carpet",
    sku: "GLA-001",
    price: "3 000 DH",
    isAvailable: true,
    images: [
      "/placeholders/7.png",
      "/placeholders/7-2.png",
      "/placeholders/7-3.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "227 × 132 cm", price: "3 000 DH" }
    ],
    description: "Hand-made masterpiece combining three traditional techniques (woolen, woven, and embroidered) using pure living sheep's wool from the Atlas mountains."
  },
  {
    id: "glaoui-002",
    name: "Glaoui Berber Carpet",
    sku: "GLA-002",
    price: "2 000 DH",
    isAvailable: true,
    images: [
      "/placeholders/9-1.png",
      "/placeholders/9-2.jpg",
      "/placeholders/9-3.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "150 × 106 cm", price: "2 000 DH" }
    ],
    description: "An authentic Glaoui creation crafted with wool, flatweave, and intricate embroidery, featuring rich natural colors and traditional Berber motifs."
  },
  {
    id: "glaoui-003",
    name: "Glaoui Berber Carpet 3",
    sku: "GLA-003",
    price: "2 700 DH",
    isAvailable: true,
    images: [
      "/placeholders/8-1.png",
      "/placeholders/8-2.jpg",
      "/placeholders/8-3.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "207 × 120 cm", price: "2 700 DH" }
    ],
    description: "Unique Glaoui style carpet showcasing the exceptional triple-technique craftsmanship of rural women artisans, woven with living wool."
  },
  {
    id: "mouzaik-001",
    name: "Mouzaïk Berber",
    sku: "MOU-001",
    price: "3 500 DH",
    isAvailable: true,
    images: [
      "/placeholders/10.png",
      "/placeholders/10-2.jpg",
      "/placeholders/10-3.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "250 × 146 cm", price: "3 200 DH" },
    ],
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors, hand-crafted by women artisans in the Atlas mountains."
  },
  {
    id: "mouzaik-003",
    name: "Mouzaïk Classic",
    sku: "MOU-003",
    price: "5000 DH",
    isAvailable: true,
    images: [
      "/placeholders/12.png",
      "/placeholders/12-3.jpg",
      "/placeholders/12-4.png"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "250 × 145 cm", price: "3 100 DH" },
    ],
    description: "Handcrafted Mouzaïk carpet showcasing traditional woolen squares and authentic symbols of the High Atlas, woven by women artisans."
  },
  {
    id: "mouzaik-002",
    name: "Mouzaïk Heritage",
    sku: "MOU-002",
    price: "2500 DH",
    isAvailable: true,
    images: [
      "/placeholders/11-1.png",
      "/placeholders/11-3.jpg",
      "/placeholders/11-2.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "167 × 128 cm", price: "2 600 DH" },
    ],
    description: "An exquisite Mouzaïk carpet featuring intricate geometric square patterns and traditional Berber weaving techniques passed down through generations."
  },
  {
    id: "taznakht-002",
    name: "Taznakht",
    sku: "BR-002",
    price: "2 800 DH",
    isAvailable: true,
    images: ["/placeholders/taznakht-1.jpg", "/placeholders/taznakht-2.jpg"],
    category: "Azilal",
    sizes: [
      { size: "100 × 150 cm", price: "1 400 DH" },
      { size: "150 × 200 cm", price: "2 100 DH" },
      { size: "160 × 230 cm", price: "2 800 DH" },
      { size: "200 × 300 cm", price: "3 900 DH" },
      { size: "250 × 350 cm", price: "5 200 DH" },
      { size: "300 × 400 cm", price: "6 800 DH" },
    ],
    description: "Vibrant and full of history, this Taznakht creation showcases expressive Berber symbols dyed with natural saffron and henna extracts."
  },
  {
    id: "ouaouzguite-saffron-005",
    name: "Ouaouzguite Saffron Heritage",
    sku: "OUA-001",
    price: "2 500 DH",
    isAvailable: true,
    images: [
      "/placeholders/produit1.png",
      "/placeholders/produit1-1.jpg",
      "/placeholders/produit1-2.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "98 × 66 cm", price: "950 DH" },
      { size: "104 × 66 cm", price: "1 100 DH" },
      { size: "207 × 162 cm", price: "2 500 DH" },
      { size: "246 × 152 cm", price: "3 200 DH" },
    ],
    description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional High Atlas craftsmanship."
  },
  {
    id: "ouaouzguite-atlas-006",
    name: "Ouaouzguite Atlas Motif",
    sku: "OUA-002",
    price: "3 400 DH",
    isAvailable: true,
    images: [
      "/placeholders/produit2-4.png",
      "/placeholders/produit2-3.jpg",
      "/placeholders/produit2-2.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "100 × 150 cm", price: "1 700 DH" },
      { size: "150 × 200 cm", price: "2 500 DH" },
      { size: "160 × 230 cm", price: "3 400 DH" },
      { size: "200 × 300 cm", price: "4 600 DH" },
      { size: "250 × 350 cm", price: "6 000 DH" },
      { size: "300 × 400 cm", price: "7 800 DH" },
    ],
    description: "An intricate geometric design woven by rural women cooperative members, combining deep charcoal wool with earthy tribal highlights."
  },
  {
    id: "ouaouzguite-custom-008",
    name: "Mix Zanifi et Picasso",
    sku: "OUA-004",
    price: "Sur commande",
    isAvailable: true,
    images: [
      "/placeholders/produit3-2.png",
      "/placeholders/produit3-3.jpg",
      "/placeholders/produit3-33.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "100 × 150 cm", price: "0 DH" },
      { size: "150 × 200 cm", price: "0 DH" },
      { size: "160 × 230 cm", price: "0 DH" },
      { size: "200 × 300 cm", price: "0 DH" },
      { size: "250 × 350 cm", price: "0 DH" },
      { size: "300 × 400 cm", price: "0 DH" },
    ],
    description: "Pre-order piece blending the geometric heritage of Zanifi with Picasso-inspired abstract artistry. Hand-woven on demand by our women artisans in the Atlas mountains. Contact us via WhatsApp for custom pricing."
  },
  {
    id: "ouaouzguite-custom-009",
    name: "Tapis sur commande",
    sku: "OUA-004",
    price: "3 400 DH",
    isAvailable: true,
    images: [
      "/placeholders/produit4.png",
      "/placeholders/produit4.jpg",
      "/placeholders/2.png"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "100 × 150 cm", price: "1 700 DH" },
      { size: "150 × 200 cm", price: "2 500 DH" },
      { size: "160 × 230 cm", price: "3 400 DH" },
      { size: "200 × 300 cm", price: "4 600 DH" },
      { size: "250 × 350 cm", price: "6 000 DH" },
      { size: "300 × 400 cm", price: "7 800 DH" },
    ],
    description: "Bespoke made-to-order Berber carpet. Send us your preferred dimensions, colors, or custom design and our women artisans will weave it specially for you."
  },
  {
    id: "ouaouzguite-custom-0033",
    name: "Tapis sur commande",
    sku: "OUA-004",
    price: "3 400 DH",
    isAvailable: true,
    images: [
      "/placeholders/5-1.png",
      "/placeholders/5-2.jpg",
      "/placeholders/5-3.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "100 × 150 cm", price: "1 700 DH" },
      { size: "150 × 200 cm", price: "2 500 DH" },
      { size: "160 × 230 cm", price: "3 400 DH" },
      { size: "200 × 300 cm", price: "4 600 DH" },
      { size: "250 × 350 cm", price: "6 000 DH" },
      { size: "300 × 400 cm", price: "7 800 DH" },
    ],
    description: "Bespoke made-to-order Berber carpet. Send us your preferred dimensions, colors, or custom design and our women artisans will weave it specially for you."
  },
  {
    id: "ouaouzguite-berber-007",
    name: "Ouaouzguite Royal Berber",
    sku: "OUA-003",
    price: "4 500 DH",
    isAvailable: true,
    images: [
      "/placeholders/ouaouzguite-3.webp",
      "/placeholders/ouaouzguite-1.webp",
      "/placeholders/ouaouzguite-2.webp"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "100 × 150 cm", price: "2 200 DH" },
      { size: "150 × 200 cm", price: "3 300 DH" },
      { size: "160 × 230 cm", price: "4 500 DH" },
      { size: "200 × 300 cm", price: "6 000 DH" },
      { size: "250 × 350 cm", price: "7 900 DH" },
      { size: "300 × 400 cm", price: "10 000 DH" },
    ],
    description: "A breathtaking statement piece featuring symmetrical royal motifs, hand-knotted using premium living sheep wool and organic mountain dyes."
  }
];

export const collectionsData = [
  {
    id: "ouaouzguite",
    name: "Ouaouzguite",
    subtitle: "BERBER CARPET",
    description: "Hand-woolen technique with thousands of small knots from living sheep's wool and natural dyes.",
    images: [
      "/placeholders/ouaouzguite-1.webp",
      "/placeholders/ouaouzguite-2.webp",
      "/placeholders/ouaouzguite-3.webp"
    ],
    href: "/rugs?category=ouaouzguite"
  },
  {
    id: "glaoui",
    name: "Glaoui",
    subtitle: "BERBER CARPET",
    description: "Hand-made with three techniques (woolen, woven, embroidered) containing living sheep's wool.",
    images: [
      "/placeholders/glaoui-1.jpeg",
      "/placeholders/glaoui-2.jpeg",
      "/placeholders/glaoui-3.jpeg"
    ],
    href: "/rugs?category=glaoui"
  },
  {
    id: "mouzaik",
    name: "Mouzaïk",
    subtitle: "BERBER CARPET",
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors.",
    images: [
      "/placeholders/mouzaik-2.jpeg",
      "/placeholders/mouzaik-1.jpeg",
      "/placeholders/mouzaik-3.jpeg"
    ],
    href: "/rugs?category=mouzaik"
  },
  {
    id: "akhenif",
    name: "Akhenif",
    subtitle: "BERBER CARPET",
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols.",
    images: [
      "/placeholders/akhenif-1.jpeg",
      "/placeholders/akhenif-2.jpeg",
      "/placeholders/akhenif-3.jpeg"
    ],
    href: "/rugs?category=akhenif"
  },
  {
    id: "tapis-tableau",
    name: "Akhenif Berber",
    subtitle: "TAPIS TABLEAU",
    description: "Hand-woven art technique containing living sheep's wool and natural colors.",
    images: [
      "/placeholders/tableau-1.jpeg",
      "/placeholders/tableau-2.png",
      "/placeholders/tableau-3.jpeg"
    ],
    href: "/rugs?category=tapis-tableau"
  },
  {
    id: "zanifi",
    name: "Zanifi",
    subtitle: "BERBER CARPET",
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols.",
    images: [
      "/placeholders/zanifi-1.jpeg",
      "/placeholders/zanifi-2.jpeg",
      "/placeholders/zanifi-3.jpg"
    ],
    href: "/rugs?category=zanifi"
  }
];