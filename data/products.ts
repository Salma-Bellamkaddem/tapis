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
    id: "akhenif-001",
    name: "Akhenif Berber Carpet",
    sku: "AKH-001",
    price: "$350",
    isAvailable: true,
    images: [
      "/placeholders/akhenif-p1.png",
      "/placeholders/akhenif-p2.png",
      "/placeholders/akhenif-p3.jpg"
    ],
    category: "Akhenif",
    sizes: [
      { size: "264 × 139 cm", price: "$350" },
    ],
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "glaoui-001",
    name: "Glaoui Berber Carpet",
    sku: "GLA-001",
    price: "$300",
    isAvailable: true,
    images: [
      "/placeholders/7.png",
      "/placeholders/7-2.png",
      "/placeholders/7-3.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "227 × 132 cm", price: "$300" }
    ],
    description: "Hand-made masterpiece combining three traditional techniques (woolen, woven, and embroidered) using pure living sheep's wool from the Atlas mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-002",
    name: "Akhenif Berber Carpet",
    sku: "AKH-002",
    price: "$450",
    isAvailable: true,
    images: [
      "/placeholders/akhenif-p2-1.png",
      "/placeholders/akhenif-p2-2.jpg",
      "/placeholders/akhenif-p2-3.jpg"
    ],
    category: "Akhenif",
    sizes: [
      { size: "255 × 140 cm", price: "$450" },
    ],
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "glaoui-002",
    name: "Glaoui Berber Carpet",
    sku: "GLA-002",
    price: "$200",
    isAvailable: true,
    images: [
      "/placeholders/9-1.png",
      "/placeholders/9-2.jpg",
      "/placeholders/9-3.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "150 × 106 cm", price: "$200" }
    ],
    description: "An authentic Glaoui creation crafted with wool, flatweave, and intricate embroidery, featuring rich natural colors and traditional Berber motifs. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "glaoui-003",
    name: "Glaoui Berber Carpet 3",
    sku: "GLA-003",
    price: "$270",
    isAvailable: true,
    images: [
      "/placeholders/8-1.png",
      "/placeholders/8-2.jpg",
      "/placeholders/8-3.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "207 × 120 cm", price: "$270" }
    ],
    description: "Unique Glaoui style carpet showcasing the exceptional triple-technique craftsmanship of rural women artisans, woven with living wool. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-003",
    name: "Akhenif Berber Carpet",
    sku: "AKH-003",
    price: "$60",
    isAvailable: true,
    images: [
      "/placeholders/akhenif-p3-1.png",
      "/placeholders/akhenif-p3-2.jpg",
      "/placeholders/akhenif-p3-3.jpg"
    ],
    category: "Akhenif",
    sizes: [
      { size: "100 × 67 cm", price: "$60" },
    ],
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-001",
    name: "Picasso Berber",
    sku: "PIC-001",
    price: "$280",
    isAvailable: true,
    images: [
      "/placeholders/picasso-p1.png",
      "/placeholders/picasso-p1-2.jpg",
      "/placeholders/picasso-p1-3.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "200 × 107 cm", price: "$280" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },

  {
    id: "picasso-berber-002",
    name: "Picasso Berber",
    sku: "PIC-002",
    price: "$290",
    isAvailable: true,
    images: [
      "/placeholders/picasso-p2-1.png",
      "/placeholders/picasso-p2-2.jpeg",
      "/placeholders/picasso-p2-3.jpeg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "215 × 103 cm", price: "$290" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-004",
    name: "Picasso Berber",
    sku: "PIC-004",
    price: "$210",
    isAvailable: true,
    images: [
      "/placeholders/picasso-p4-1.png",
      "/placeholders/picasso-p4-2.jpg",
      "/placeholders/picasso-p4-3.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "150 × 114 cm", price: "$210" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-003",
    name: "Zanifi Berber",
    sku: "ZAN-003",
    price: "$550",
    isAvailable: true,
    images: [
      "/placeholders/zanafi-p3-1.png",
      "/placeholders/zanafi-p3-2.jpg",
      "/placeholders/zanafi-p3-3.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "315 × 220 cm", price: "$550" },
    ],
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-002",
    name: "Zanifi Berber",
    sku: "ZAN-002",
    price: "$310",
    isAvailable: true,
    images: [
      "/placeholders/zanafi-p2-1.png",
      "/placeholders/zanafi-p2-2.jpg",
      "/placeholders/zanafi-p2-3.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "212 × 128 cm", price: "$310" },
    ],
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-001",
    name: "Zanifi Berber",
    sku: "ZAN-001",
    price: "$420",
    isAvailable: true,
    images: [
      "/placeholders/zanifi-p1-1.jpg",
      "/placeholders/zanifi-p1-2.jpg",
      "/placeholders/zanifi-p1-3.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "256 × 166 cm", price: "$420" },
    ],
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-003",
    name: "Picasso Berber",
    sku: "PIC-003",
    price: "$380",
    isAvailable: true,
    images: [
      "/placeholders/picasso-p3-1.png",
      "/placeholders/picasso-p3-2.jpg",
      "/placeholders/picasso-p3-3.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "250 × 155 cm", price: "$380" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-tableau-003",
    name: "Akhenif Berber",
    sku: "TAB-003",
    price: "$60",
    isAvailable: true,
    images: [
      "/placeholders/tableau4-p1.png",
      "/placeholders/tableau4-p2.jpg",
      "/placeholders/tableau4-p3.jpg"
    ],
    category: "Tapis Tableau",
    sizes: [
      { size: "110 × 73 cm", price: "$60" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-tableau-002",
    name: "Akhenif Berber",
    sku: "TAB-002",
    price: "$200",
    isAvailable: true,
    images: [
      "/placeholders/tableau2-p.png",
      "/placeholders/tableau2-p1.jpg",
      "/placeholders/tableau2-p2.jpg"
    ],
    category: "Tapis Tableau",
    sizes: [
      { size: "160 × 103 cm", price: "$200" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-tableau-001",
    name: "Akhenif Berber",
    sku: "TAB-001",
    price: "$400",
    isAvailable: true,
    images: [
      "/placeholders/tableau-p1-1.jpeg",
      "/placeholders/tableau-p1-2.jpg",
      "/placeholders/tableau-p1-3.jpg"
    ],
    category: "Tapis Tableau",
    sizes: [
      { size: "264 × 134 cm", price: "$350" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "mouzaik-001",
    name: "Mouzaïk Berber",
    sku: "MOU-001",
    price: "$350",
    isAvailable: true,
    images: [
      "/placeholders/10.png",
      "/placeholders/10-2.jpg",
      "/placeholders/10-3.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "250 × 146 cm", price: "$320" },
    ],
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors, hand-crafted by women artisans in the Atlas mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "mouzaik-003",
    name: "Mouzaïk Classic",
    sku: "MOU-003",
    price: "$310",
    isAvailable: true,
    images: [
      "/placeholders/12.png",
      "/placeholders/12-3.jpg",
      "/placeholders/12-4.png"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "250 × 145 cm", price: "$310" },
    ],
    description: "Handcrafted Mouzaïk carpet showcasing traditional woolen squares and authentic symbols of the High Atlas, woven by women artisans. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "mouzaik-002",
    name: "Mouzaïk Heritage",
    sku: "MOU-002",
    price: "$260",
    isAvailable: true,
    images: [
      "/placeholders/11-1.png",
      "/placeholders/11-3.jpg",
      "/placeholders/11-2.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "167 × 128 cm", price: "$260" },
    ],
    description: "An exquisite Mouzaïk carpet featuring intricate geometric square patterns and traditional Berber weaving techniques passed down through generations. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "ouaouzguite-saffron-005",
    name: "Ouaouzguite Saffron Heritage",
    sku: "OUA-001",
    price: "$250",
    isAvailable: true,
    images: [
      "/placeholders/produit1.png",
      "/placeholders/produit1-1.jpg",
      "/placeholders/produit1-2.jpg"
    ],
    category: "zanifi",
    sizes: [
      { size: "98 × 66 cm", price: "$95" },
      { size: "104 × 66 cm", price: "$110" },
      { size: "207 × 162 cm", price: "$250" },
      { size: "246 × 152 cm", price: "$320" },
    ],
    description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional High Atlas craftsmanship. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "ouaouzguite-atlas-006",
    name: "Ouaouzguite Atlas Motif",
    sku: "OUA-002",
    price: "$383",
    isAvailable: true,
    images: [
      "/placeholders/produit2-4.png",
      "/placeholders/produit2-3.jpg",
      "/placeholders/produit2-2.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "246 × 152 cm", price: "$383" },
    ],
    description: "This Ouaouzguite Berber carpet is a beautiful example of traditional Moroccan craftsmanship, inspired by the colorful weaving traditions of the Atlas regions. This vibrant red wool carpet features intricate and colorful geometric patterns, including central diamond motifs and detailed borders. It incorporates traditional Berber symbols and vibrant colors such as blue, yellow and white, creating an authentic and graphic contrast against the red background. Its hand-knotted texture and carefully crafted finishes make it a distinctive piece, perfect for creating a warm and authentic interior. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
  },

  {
    id: "ouaouzguite-custom-009",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-004",
    price: "$82",
    isAvailable: true,
    images: [
      "/placeholders/produit4.png",
      "/placeholders/produit4.jpg",
      "/placeholders/2.png"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "104 × 66 cm", price: "$82" },
    ],
    description: "This Ouaouzguite Berber carpet is a beautiful example of traditional Moroccan craftsmanship, inspired by the colorful weaving traditions of the Atlas regions. Its patchwork-style composition combines different geometric motifs, including zigzags, diamonds, diagonal lines and checkerboard patterns. The traditional Berber symbols and geometric motifs carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. Its vibrant combination of mustard yellow, red, deep blue, black and white gives the carpet a unique and joyful character, while its carefully crafted borders and hand-finished fringes add to its traditional charm. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-custom-0033",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-004",
    price: "$82",
    isAvailable: true,
    images: [
      "/placeholders/5-1.png",
      "/placeholders/5-2.jpg",
      "/placeholders/5-3.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "104 × 66 cm", price: "$82" },
    ],
    description: "Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-berber-007",
    name: "Ouaouzguite Royal Berber",
    sku: "OUA-003",
    price: "$295",
    isAvailable: true,
    images: [
      "/placeholders/ouaouzguite-3.webp",
      "/placeholders/ouaouzguite-1.webp",
      "/placeholders/ouaouzguite-2.png"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "238 × 138 cm", price: "$295" },
    ],
    description: "This Moroccan wool carpet features a deep red background with a large central eight-pointed star in blue and cream tones. Its geometric patterns and traditional Berber symbols, framed by an intricate border, make it an authentic and highly graphic piece of Moroccan craftsmanship. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
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
    id: "mouzaïk",
    name: "Mouzaïk",
    subtitle: "BERBER CARPET",
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors.",
    images: [
      "/placeholders/mouzaik-2.jpeg",
      "/placeholders/mouzaik-1.jpeg",
      "/placeholders/mouzaik-3.jpeg"
    ],
    href: "/rugs?category=mouzaïk"
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
    id: "Tapis Tableau",
    name: "Akhenif Berber",
    subtitle: "TAPIS TABLEAU",
    description: "Hand-woven art technique containing living sheep's wool and natural colors.",
    images: [
      "/placeholders/tableau-1.jpeg",
      "/placeholders/tableau-2.png",
      "/placeholders/tableau-3.jpeg"
    ],
    href: "/rugs?category=Tapis Tableau"
  },
  {
    id: "picasso-berber",
    name: "Picasso Berber",
    subtitle: "BERBER CARPET",
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns.",
    images: [
      "/placeholders/zanifi-1.jpeg",
      "/placeholders/zanifi-2.jpeg",
      "/placeholders/zanifi-3.jpg"
    ],
    href: "/rugs?category=picasso-berber"
  }
];