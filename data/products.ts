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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789595596/akhenif-p1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789595859/akhenif-p2.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596177/akhenif-p3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596610/akhenif-p4-.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596663/akhenif-p5.jpg"
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600724/7.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600751/7-2.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600768/7-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600877/7-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600894/7-5.jpg"
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596807/akhenif-p2-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596842/akhenif-p2-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596873/akhenif-p2-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597269/akhenif-p2-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597290/akhenif-p2-5.jpg"
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789601094/9-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789601560/9-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789601421/9-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789601483/9-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789601582/9-5.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "150 × 106 cm", price: "$200" }
    ],
    description: "An authentic Glaoui creation crafted with wool, flatweave, and intricate embroidery, featuring rich natural colors and traditional Berber motifs. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "glaoui-003",
    name: "Glaoui Berber Carpet",
    sku: "GLA-003",
    price: "$270",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789601826/8-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789602117/8-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789602022/8-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789602188/8-5.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789602046/8-3.jpg"
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597435/akhenif-p3-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597897/akhenif-p3-4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597472/akhenif-p3-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597492/akhenif-p3-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789597954/akhenif-p3-5.jpg"
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
    price: "$300",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605799/picasso-p1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605910/picasso-p1-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605849/picasso-p1-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606021/picasso-p1-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606014/picasso-p1-5.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "200 × 107 cm", price: "$300" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-002",
    name: "Picasso Berber",
    sku: "PIC-002",
    price: "$300",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606119/picasso-p2-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606369/picasso-p2-7.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606185/picasso-p2-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606208/picasso-p2-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606305/picasso-p2-5.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "215 × 103 cm", price: "$300" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-004",
    name: "Picasso Berber",
    sku: "PIC-004",
    price: "$250",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648378/picasso-p4-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648407/picasso-p4-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648444/picasso-p4-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648532/picasso-p4-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648531/picasso-p4-5.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "150 × 114 cm", price: "$250" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-003",
    name: "Zanifi Berber",
    sku: "ZAN-003",
    price: "$850",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650048/zanafi-p3-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650082/zanafi-p3-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650103/zanafi-p3-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650129/photo_2026-09-17_14-03-06.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650132/photo_2026-09-17_14-03-01.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "315 × 220 cm", price: "$850" },
    ],
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-002",
    name: "Zanifi Berber",
    sku: "ZAN-002",
    price: "$300",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650567/zanafi-p2-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650589/zanafi-p2-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650616/zanafi-p2-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650669/photo_2026-09-17_14-11-37.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "212 × 128 cm", price: "$200" },
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650258/zanifi-p1-1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650490/photo_2026-09-17_14-09-10.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650294/zanifi-p1-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650317/zanifi-p1-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650359/photo_2026-09-17_14-06-38.jpg"
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
    price: "$450",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606683/picasso-p3-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606997/picasso-p3-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606718/picasso-p3-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606742/picasso-p3-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606984/picasso-p3-5.jpg"
    ],
    category: "picasso-berber",
    sizes: [
      { size: "250 × 155 cm", price: "$450" },
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649431/tableau4-p1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649762/photo_2026-09-17_13-56-39.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649446/tableau4-p2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649808/photo_2026-09-17_13-57-53.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649763/photo_2026-09-17_13-56-44.jpg"
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649144/tableau2-p.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649280/tableau2-p3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649323/photo_2026-09-17_13-49-34.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649279/tableau2-p4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649277/tableau2-p5.jpg"
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648947/tableau-p1-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648966/tableau-p1-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649054/tableau-p1-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648979/tableau-p1-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649056/tableau-p1-5.jpg"
    ],
    category: "Tapis Tableau",
    sizes: [
      { size: "264 × 134 cm", price: "$400" },
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604336/10-1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604331/10-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604325/10-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604342/10-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604347/10-5.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "250 × 146 cm", price: "$350" },
    ],
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors, hand-crafted by women artisans in the Atlas mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "mouzaik-003",
    name: "Mouzaïk Classic",
    sku: "MOU-003",
    price: "$500",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604763/12.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605006/12-4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605119/12-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604963/12-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605069/12-5.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "250 × 145 cm", price: "$500" },
    ],
    description: "Handcrafted Mouzaïk carpet showcasing traditional woolen squares and authentic symbols of the High Atlas, woven by women artisans. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "mouzaik-002",
    name: "Mouzaïk Heritage",
    sku: "MOU-002",
    price: "$250",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1789953397/Photo_Background_Removal_4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605309/11-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605289/11-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605396/11-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605408/11-5.jpg"
    ],
    category: "Mouzaïk",
    sizes: [
      { size: "167 × 128 cm", price: "$250" },
    ],
    description: "An exquisite Mouzaïk carpet featuring intricate geometric square patterns and traditional Berber weaving techniques passed down through generations. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "ouaouzguite-saffron-005",
    name: "Ouaouzguite Saffron Heritage",
    sku: "OUA-001",
    price: "$300",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789952560/Photo_Background_Removal_3.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789652059/photo_2026-09-17_14-14-37.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789652062/photo_2026-09-17_14-14-40.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789652064/photo_2026-09-17_14-14-42.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789652068/photo_2026-09-17_14-14-43.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "207 × 162 cm", price: "$300" },
    ],
    description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional High Atlas craftsmanship. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "ouaouzguite-atlas-006",
    name: "Ouaouzguite Atlas Motif",
    sku: "OUA-002",
    price: "$350",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598160/produit2-4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598460/produit2-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598444/produit2-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599002/produit2-8.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789951896/photo_2026-09-21_00-52-06.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "246 × 152 cm", price: "$350" },
    ],
    description: "This Ouaouzguite Berber carpet is a beautiful example of traditional Moroccan craftsmanship, inspired by the colorful weaving traditions of the Atlas regions. This vibrant red wool carpet features intricate and colorful geometric patterns, including central diamond motifs and detailed borders. It incorporates traditional Berber symbols and vibrant colors such as blue, yellow and white, creating an authentic and graphic contrast against the red background. Its hand-knotted texture and carefully crafted finishes make it a distinctive piece, perfect for creating a warm and authentic interior. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-royal-008",
    name: "Ouaouzguite Royal Masterpiece",
    sku: "OUA-008",
    price: "$270",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1789954311/Photo_Background_Removal_5.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654838/photo_2026-09-17_14-41-34.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654841/photo_2026-09-17_14-41-37.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654845/photo_2026-09-17_14-42-04.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654848/photo_2026-09-17_14-42-08.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "210 × 150 cm", price: "$270" },
    ],
    description: "Ouaouzguite Berber carpet crafted with living sheep's wool from the Siroua Mountains and natural colors. Caractéristiques principales : Le grand losange central (élément emblématique associé à la protection et à la fertilité), les motifs emboîtés au cœur du médaillon central aux teintes ocres et briques, une palette audacieuse (rouge terracotta, bleu nuit, sable), une frise géométrique détaillée en bordure et des franges nouées à la main. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "ouaouzguite-custom-009",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-004",
    price: "$75",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599562/ouzguitep1-1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599663/2.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599430/produit4.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "104 × 66 cm", price: "$75" },
    ],
    description: "This Ouaouzguite Berber carpet is a beautiful example of traditional Moroccan craftsmanship, inspired by the colorful weaving traditions of the Atlas regions. Its patchwork-style composition combines different geometric motifs, including zigzags, diamonds, diagonal lines and checkerboard patterns. The traditional Berber symbols and geometric motifs carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. Its vibrant combination of mustard yellow, red, deep blue, black and white gives the carpet a unique and joyful character, while its carefully crafted borders and hand-finished fringes add to its traditional charm. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-custom-0033",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-004",
    price: "$75",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599840/5-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599869/5-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599911/5-3.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "104 × 66 cm", price: "$75" },
    ],
    description: "Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-berber-007",
    name: "Ouaouzguite Royal Berber",
    sku: "OUA-003",
    price: "$270",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600105/ouaouzguite-3-6.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600153/ouaouzguite-3-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600125/ouaouzguite-3-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600221/ouaouzguite-3-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600240/ouaouzguite-3-55.jpg"
    ],
    category: "Ouaouzguite",
    sizes: [
      { size: "238 × 138 cm", price: "$270" },
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
      "/placeholders/glaoui-2.jpeg",
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648378/picasso-p4-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606119/picasso-p2-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605910/picasso-p1-3.jpg"
    ],
    href: "/rugs?category=picasso-berber"
  },
  {
    id: "zanifi",
    name: "zanifi Berber",
    subtitle: "ZANIFI CARPET",
    description: "Artistic Zanifi-inspired Berber creation crafted with living sheep's wool and traditional patterns.",
    images: [
      "/placeholders/zanifi-1.jpeg",
      "/placeholders/zanifi-2.jpeg",
      "/placeholders/zanifi-3.jpg"
    ],
    href: "/rugs?category=zanifi"
  }
];