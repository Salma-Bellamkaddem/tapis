export interface RugSize {
  size: string;
  price: string;
}

export interface Rug {
  id: string;
  name: string;
  sku: string;
  dimensions?: string; // optionnel ou gardé pour compatibilité
  price: string; // prix de base par défaut
  isAvailable: boolean;
  images: string[];
  category: string;
  sizes: RugSize[]; // Les 6 tailles spécifiques à ce tapis avec leurs prix
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
    ]
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
    ]
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
      { size: "100 × 150 cm", price: "1 300 DH" },
      { size: "150 × 200 cm", price: "1 900 DH" },
      { size: "160 × 230 cm", price: "2 500 DH" },
      { size: "200 × 300 cm", price: "3 400 DH" },
      { size: "250 × 350 cm", price: "4 500 DH" },
      { size: "300 × 400 cm", price: "5 800 DH" },
    ]
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
    ]
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
    ]
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