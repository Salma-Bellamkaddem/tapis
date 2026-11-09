export interface PuffCushionSize {
  size: string;
  price: string;
}

export interface PuffCushion {
  id: string;
  name: string;
  sku: string;
  price: string;
  isAvailable: boolean;
  images: string[];
  category: string;
  sizes: PuffCushionSize[];
  description?: string;
}

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
    description: "Handmade Akhenif Berber rug from Taznakht, Morocco. Technique: hand-woven (flatweave) with woven symbols. Made with 100% natural wool from living sheep and natural colors, with traditional Amazigh (Berber) symbols. Each piece is unique. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "Handmade Glaoui Berber rug from Taznakht, Siroua Mountains, Morocco. Technique: three techniques in one piece (hand-woven, hand-knotted and embroidered), with woolen symbols. Made with 100% natural wool from living sheep and natural dyes. A unique statement piece. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-002",
    name: "Akhenif Berber Carpet",
    sku: "AKH-002",
    price: "$450",
    isAvailable: false,
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
    description: "Handmade Akhenif Berber rug from Taznakht, Morocco. Technique: hand-woven (flatweave) with woven symbols. Made with 100% natural wool from living sheep and natural colors, with traditional Amazigh (Berber) symbols. Each piece is unique. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "glaoui-002",
    name: "Glaoui Berber Carpet",
    sku: "GLA-002",
    price: "$200",
    isAvailable: false,
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
    description: "Handmade Glaoui Berber rug from Taznakht, Siroua Mountains, Morocco. Technique: three techniques in one piece (hand-woven, hand-knotted and embroidered), with woolen symbols. Made with 100% natural wool from living sheep and natural dyes. A unique statement piece. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "Handmade Glaoui Berber rug from Taznakht, Siroua Mountains, Morocco. Technique: three techniques in one piece (hand-woven, hand-knotted and embroidered), with woolen symbols. Made with 100% natural wool from living sheep and natural dyes. A unique statement piece. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-003",
    name: "Akhenif Berber Carpet",
    sku: "AKH-003",
    price: "$60",
    isAvailable: false,
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
    id: "akhenif-004",
    name: "Akhenif Berber Carpet",
    sku: "AKH-004",
    price: "$850",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1793627388/Gemini_Generated_Image_6irpbq6irpbq6irp.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1793630550/4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793630550/3.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1793630547/2.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1793630538/1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1793627385/Gemini_Generated_Image_s3vqw5s3vqw5s3vq.jpg"
    ],
    category: "Akhenif",
    sizes: [
      { size: "300 × 186 cm", price: "$850" },
    ],
    description: `A beautiful set of six handmade Akhenif rugs, traditionally woven by Moroccan rural women using living sheep’s wool. Featuring warm mustard and ochre tones, authentic Amazigh geometric patterns, and traditional Berber symbols, each piece reflects the rich weaving heritage of Taznakht, Morocco. Perfect as bedside rugs or decorative accents, this unique collection brings warmth, authenticity, and Moroccan craftsmanship into your home.`
  },
  {
    id: "akhenif-005",
    name: "Akhenif Berber Carpet",
    sku: "AKH-005",
    price: "$65",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793656788/Gemini_Generated_Image_2pakmw2pakmw2pak.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793656175/akh4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793656176/akh45.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793656176/akh453.jpg"
    ],
    category: "Akhenif",
    sizes: [
      { size: "104 × 67 cm", price: "$65" },
    ],
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-006",
    name: "Akhenif Berber Carpet",
    sku: "AKH-006",
    price: "$65",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793657425/Gemini_Generated_Image_zc2sguzc2sguzc2s.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793657406/photo_2026-11-02_22-01-56.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793657337/photo_2026-11-02_22-01-58.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793657336/photo_2026-11-02_22-02-00.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793657336/photo_2026-11-02_22-02-02.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "104 × 67 cm", price: "$65" },
    ],
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-007",
    name: "Akhenif Twins Carpets",
    sku: "AKH-007",
    price: "$180",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793713586/Capture_d_e%CC%81cran_2026-11-03_a%CC%80_13.46.25.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793713546/photo_2026-11-03_13-20-03.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712366/photo_2026-11-03_13-20-05.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712364/photo_2026-11-03_13-20-06.jpg",
    ],
    category: "Akhenif",
    sizes: [
      { size: "150 × 106 cm", price: "$180" },
    ],
    description: "Hand-woven technique with living sheep's wool, natural colors, and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-008",
    name: "Akhenif Twins Carpets",
    sku: "AKH-008",
    price: "$180",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793713574/Capture_d_e%CC%81cran_2026-11-03_a%CC%80_13.46.19.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712357/photo_2026-11-03_13-19-57.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712360/photo_2026-11-03_13-20-01.jpg",
    ],
    category: "Akhenif",
    sizes: [
      { size: "150 × 106 cm", price: "$180" },
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
    category: "Picasso",
    sizes: [
      { size: "200 × 107 cm", price: "$300" },
    ],
    description: "Handmade Picasso Berber rug from Taznakht, Morocco. Technique: hand-woven with woven symbols. Double-sided rug, so both sides can be used. Made with 100% natural wool from living sheep, with artistic Picasso-inspired patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "Picasso",
    sizes: [
      { size: "215 × 103 cm", price: "$300" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-004",
    name: "Picasso Berber",
    sku: "PIC-004",
    price: "$400",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648378/picasso-p4-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648407/picasso-p4-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648444/picasso-p4-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648532/picasso-p4-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648531/picasso-p4-5.jpg"
    ],
    category: "Picasso",
    sizes: [
      { size: "150 × 114 cm", price: "$400" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-005",
    name: "Picasso Berber",
    sku: "PIC-005",
    price: "$210",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793660832/Gemini_Generated_Image_p2em0pp2em0pp2em.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793660332/photo_2026-11-02_22-58-38.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793660331/photo_2026-11-02_22-58-40.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793660334/photo_2026-11-02_22-58-42.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793660334/photo_2026-11-02_22-58-42.jpg"
    ],
    category: "Picasso",
    sizes: [
      { size: "154 × 100 cm", price: "$210" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "picasso-berber-006",
    name: "Picasso Berber",
    sku: "PIC-006",
    price: "$200",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793661910/Design_sans_titre_39.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793661584/photo_2026-11-02_23-14-01.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793661584/photo_2026-11-02_23-14-04.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793661584/photo_2026-11-02_23-14-06.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793661585/photo_2026-11-02_23-14-08.jpg"
    ],
    category: "Picasso",
    sizes: [
      { size: "150 × 100 cm", price: "$200" },
    ],
    description: "Handmade Picasso Berber rug from Taznakht, Morocco. Technique: hand-woven with woven symbols. Double-sided rug, so both sides can be used. Made with 100% natural wool from living sheep, with artistic Picasso-inspired patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-003",
    name: "Zanifi Berber",
    sku: "ZAN-003",
    price: "$850",
    isAvailable: false,
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
    description: "Hand-embroidered using traditional Berber embroidery techniques, this authentic Moroccan rug is crafted from natural living sheep's wool."
  },
  {
    id: "zanifi-berber-004",
    name: "Zanifi Berber",
    sku: "ZAN-004",
    price: "$220",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793750110/photo_2026-11-03_23-55-24.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793750116/photo_2026-11-03_23-55-39.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793750112/photo_2026-11-03_23-55-32.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793750114/photo_2026-11-03_23-55-36.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793750118/photo_2026-11-03_23-55-41.jpg"
    ],
    category: "Zanifi",
    sizes: [
      { size: "195 × 106 cm", price: "$220" },
    ],
    description: "Handmade Zanifi Berber rug from Taznakht, Morocco. Technique: hand-embroidered, with woven and embroidered symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "zanifi-berber-002",
    name: "Zanifi Berber",
    sku: "ZAN-002",
    price: "$200",
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
    description: "Hand-embroidered using traditional Berber embroidery techniques."
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
    description: "Handmade Zanifi Berber rug from Taznakht, Morocco. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "Picasso",
    sizes: [
      { size: "250 × 155 cm", price: "$450" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool."
  },
  {
    id: "akhenif-tableau-004",
    name: "Akhenif Berber",
    sku: "TAB-004",
    price: "$170",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-08.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-10.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643253/photo_2026-11-02_18-12-12.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-18.jpg"
    ],
    category: "Tableau",
    sizes: [
      { size: "158 × 107 cm", price: "$170" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors."
  },
  {
    id: "akhenif-tableau-003",
    name: "Akhenif Berber",
    sku: "TAB-003",
    price: "$60",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649431/tableau4-p1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649762/photo_2026-09-17_13-56-39.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649446/tableau4-p2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649808/photo_2026-09-17_13-57-53.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789649763/photo_2026-09-17_13-56-44.jpg"
    ],
    category: "Tableau",
    sizes: [
      { size: "110 × 73 cm", price: "$60" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors."
  },
  {
    id: "akhenif-tableau-005",
    name: "Akhenif Berber",
    sku: "TAB-005",
    price: "$135",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793655391/Design_sans_titre_38.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-12.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-14.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-16.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-18.jpg"
    ],
    category: "Tableau",
    sizes: [
      { size: "165 × 90 cm", price: "$135" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors."
  },
  {
    id: "akhenif-tableau-008",
    name: "Akhenif Berber",
    sku: "TAB-008",
    price: "$190",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702735/photo_2026-11-03_10-46-22.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793703383/Moroccan_Rug_with_Colorful_Geometric_Motifs.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702536/photo_2026-11-03_10-41-00.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702541/photo_2026-11-03_10-41-02.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702536/photo_2026-11-03_10-41-04.jpg"
    ],
    category: "Tableau",
    sizes: [
      { size: "152 × 109 cm", price: "$190" },
    ],
    description: "Handmade Tapis Tableau (Lemzerbi) Berber rug from Taznakht, Morocco."
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
    category: "Tableau",
    sizes: [
      { size: "160 × 103 cm", price: "$200" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors."
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
    category: "Tableau",
    sizes: [
      { size: "264 × 134 cm", price: "$400" },
    ],
    description: "Handmade Tapis Tableau (Lemzerbi) Berber rug from Taznakht, Morocco."
  },
  {
    id: "akhenif-tableau-006",
    name: "Akhenif Berber",
    sku: "TAB-006",
    price: "$190",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793663283/photo_2026-11-02_23-47-35.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793664070/Gemini_Generated_Image_cuegt3cuegt3cueg.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793663286/photo_2026-11-02_23-47-38.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793663290/photo_2026-11-02_23-47-40.jpg",
    ],
    category: "Tableau",
    sizes: [
      { size: "152 × 109 cm", price: "$190" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors."
  },
  {
    id: "akhenif-tableau-007",
    name: "Akhenif Berber",
    sku: "TAB-007",
    price: "$185",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793664483/Gemini_Generated_Image_jy0w3cjy0w3cjy0w.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793664200/photo_2026-11-03_00-03-49.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793664203/photo_2026-11-03_00-03-53.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793664205/photo_2026-11-03_00-03-54.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793664208/photo_2026-11-03_00-03-57.jpg"
    ],
    category: "Tableau",
    sizes: [
      { size: "150 × 106 cm", price: "$185" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors."
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
    category: "Mouzaik",
    sizes: [
      { size: "250 × 146 cm", price: "$350" },
    ],
    description: "Handmade Mouzaïk Berber rug from the Siroua Mountains, Taznakht, Morocco."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793642123/photo_2026-11-02_17-43-08.jpg",
    ],
    category: "Mouzaik",
    sizes: [
      { size: "250 × 145 cm", price: "$500" },
    ],
    description: "Handcrafted Mouzaïk carpet showcasing traditional woolen squares."
  },
  {
    id: "mouzaik-002",
    name: "Mouzaïk Heritage",
    sku: "MOU-002",
    price: "$250",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1789953397/Photo_Background_Removal_4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605309/11-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605289/11-3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605396/11-4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605408/11-5.jpg"
    ],
    category: "Mouzaik",
    sizes: [
      { size: "167 × 128 cm", price: "$250" },
    ],
    description: "An exquisite Mouzaïk carpet featuring intricate geometric square patterns."
  },
  {
    id: "mouzaik-004",
    name: "Moroccan Berber Runner Rug Mouzaïk",
    sku: "MOU-004",
    price: "$130",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793663085/Tapis_berbe%CC%80re_marocain_ge%CC%81ome%CC%81trique_colore%CC%81.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662521/photo_2026-11-02_23-31-36.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662519/photo_2026-11-02_23-31-35.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662517/photo_2026-11-02_23-31-31.jpg"
    ],
    category: "Runner",
    sizes: [
      { size: "154 × 66 cm", price: "$130" },
    ],
    description: "Handmade Mouzaïk Berber runner rug from Taznakht, Morocco, ideal for hallways."
  },
  {
    id: "mouzaik-005",
    name: "Mouzaïk Berber",
    sku: "MOU-005",
    price: "$950",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793714721/Tapis_berbe%CC%80re_colore%CC%81_et_paniers_de_paille.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793714732/photo_2026-11-03_14-02-07.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793714744/photo_2026-11-03_14-02-23.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793714736/photo_2026-11-03_14-02-16.jpg",
    ],
    category: "Mouzaik",
    sizes: [
      { size: "312 × 200 cm", price: "$950" },
    ],
    description: "Handmade Mouzaïk Berber rug from the Siroua Mountains, Taznakht, Morocco."
  },
  {
    id: "ouaouzguite-saffron-005",
    name: "Ouaouzguit White and Black Wool Rug",
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
    category: "Ouaouzguit",
    sizes: [
      { size: "207 × 162 cm", price: "$300" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-atlas-006",
    name: "Ouaouzguite Taznakhte Motif",
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
    category: "Ouaouzguit",
    sizes: [
      { size: "246 × 152 cm", price: "$350" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-royal-008",
    name: "Ouaouzguite Royal Masterpiece",
    sku: "OUA-008",
    price: "$270",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1789954311/Photo_Background_Removal_5.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654838/photo_2026-09-17_14-41-34.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654841/photo_2026-09-17_14-41-37.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654845/photo_2026-09-17_14-42-04.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789654848/photo_2026-09-17_14-42-08.jpg"
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "210 × 150 cm", price: "$270" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-custom-009",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-004",
    price: "$75",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599562/ouzguitep1-1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599430/produit4.jpg"
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "104 × 66 cm", price: "$75" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-custom-010",
    name: "Moroccan Berber Runner Rug Ouaouzguite",
    sku: "OUA-010",
    price: "$4000",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793820104/Capture_d_e%CC%81cran_2026-10-18_a%CC%80_22.02.08.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792171142/photo_2026-10-16_17-07-20.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792171142/photo_2026-10-16_17-07-18.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792171143/photo_2026-10-16_17-07-24.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "485 × 150 cm", price: "$4000" },
    ],
    description: "This Ouaouzguite Berber rug is a beautiful example of traditional Moroccan craftsmanship."
  },
  {
    id: "ouaouzguite-saffron-012",
    name: "Ouaouzguite Saffron Heritage",
    sku: "OUA-012",
    price: "$75",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793658966/Moroccan_Berber_Rug_Showroom_Styling.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793658831/photo_2026-11-02_22-34-08.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793658828/photo_2026-11-02_16-28-51.jpg",
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "126 × 72 cm", price: "$75" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "runner-berber-001",
    name: "Moroccan Berber Runner Rug Ouaouzguite",
    sku: "RUN-001",
    price: "$125",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718935/Gemini_Generated_Image_slx81oslx81oslx8.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718344/photo_2026-11-03_14-56-22.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718348/photo_2026-11-03_14-56-24.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "180 cm × 76 cm", price: "$125" },
    ],
    description: "Handmade Ouaouzguit Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-002",
    name: "Moroccan Berber Runner Rug Ouaouzguite",
    sku: "RUN-002",
    price: "$150",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721493/Gemini_Generated_Image_sxat39sxat39sxat.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721563/Gemini_Generated_Image_d8uan5d8uan5d8ua.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721083/photo_2026-11-03_15-51-24.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "202 cm × 75 cm", price: "$150" },
    ],
    description: "Handmade Ouaouzguit Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-003",
    name: "Moroccan Berber Runner Rug Glaoui",
    sku: "RUN-003",
    price: "$225",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723389/Gemini_Generated_Image_6u3dkc6u3dkc6u3d_1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723205/Gemini_Generated_Image_za5fwxza5fwxza5f.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793722651/photo_2026-11-03_16-18-18.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "233 cm × 72 cm", price: "$225" },
    ],
    description: "Handmade Glaoui Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-004",
    name: "Moroccan Berber Runner Rug Glaoui",
    sku: "RUN-004",
    price: "$130",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723988/Gemini_Generated_Image_kvhmedkvhmedkvhm.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723858/photo_2026-11-03_16-34-39.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "180 cm × 77 cm", price: "$130" },
    ],
    description: "Handmade Glaoui Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-005",
    name: "Moroccan Berber Runner Rug Glaoui",
    sku: "RUN-005",
    price: "$110",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724622/Gemini_Generated_Image_dnz3kudnz3kudnz3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724884/Gemini_Generated_Image_bjt5rybjt5rybjt5.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "162 cm × 62 cm", price: "$110" },
    ],
    description: "Handmade Glaoui Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-006",
    name: "Moroccan Berber Runner Rug Mouzaïk",
    sku: "RUN-006",
    price: "$160",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793727839/Gemini_Generated_Image_cbqf17cbqf17cbqf.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793725110/photo_2026-11-03_16-58-32.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "204 cm × 65 cm", price: "$160" },
    ],
    description: "Handmade Mouzaïk Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-007",
    name: "Moroccan Berber Runner Rug Mouzaïk",
    sku: "RUN-007",
    price: "$110",
    isAvailable: false,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793729530/Gemini_Generated_Image_ywj0t5ywj0t5ywj0.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793729484/photo_2026-11-03_18-02-20.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "160 cm × 68 cm", price: "$110" },
    ],
    description: "Handmade Mouzaïk Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-008",
    name: "Moroccan Berber Runner Rug Akhenif",
    sku: "RUN-008",
    price: "$180",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793743879/Gemini_Generated_Image_ygyh04ygyh04ygyh.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730290/photo_2026-11-03_18-20-03.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "200 cm × 66 cm", price: "$180" },
    ],
    description: "Handmade Akhenif Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-009",
    name: "Moroccan Berber Runner Rug Akhenif",
    sku: "RUN-009",
    price: "$165",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793744064/Gemini_Generated_Image_uh5wnjuh5wnjuh5w.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730543/photo_2026-11-03_18-28-59.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "200 cm × 72 cm", price: "$165" },
    ],
    description: "Handmade Akhenif Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-010",
    name: "Moroccan Berber Runner Rug Akhenif",
    sku: "RUN-010",
    price: "$230",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793744266/Gemini_Generated_Image_i8esfji8esfji8es.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730850/photo_2026-11-03_18-33-09.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "246 cm × 62 cm", price: "$230" },
    ],
    description: "Handmade Akhenif Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-011",
    name: "Moroccan Berber Runner Rug Akhenif",
    sku: "RUN-011",
    price: "$185",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745131/Gemini_Generated_Image_ezkd6eezkd6eezkd.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793731125/photo_2026-11-03_18-39-03.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "200 cm × 60 cm", price: "$185" },
    ],
    description: "Handmade Akhenif Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-012",
    name: "Moroccan Berber Runner Rug Picasso",
    sku: "RUN-012",
    price: "$150",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745273/Gemini_Generated_Image_wvjdkdwvjdkdwvjd.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793742861/photo_2026-11-03_18-44-44.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "155 cm × 70 cm", price: "$150" },
    ],
    description: "Handmade Picasso Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-013",
    name: "Moroccan Berber Runner Rug Picasso",
    sku: "RUN-013",
    price: "$220",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793746056/Gemini_Generated_Image_9a00gq9a00gq9a00.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745931/photo_2026-11-03_22-39-41.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "208 cm × 60 cm", price: "$220" },
    ],
    description: "Handmade Picasso Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-014",
    name: "Moroccan Berber Runner Rug Picasso",
    sku: "RUN-014",
    price: "$120",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747191/Gemini_Generated_Image_d9bwujd9bwujd9bw.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747177/photo_2026-11-03_22-51-19.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "156 cm × 70 cm", price: "$120" },
    ],
    description: "Handmade Picasso Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-015",
    name: "Moroccan Berber Runner Rug Tableau",
    sku: "RUN-015",
    price: "$170",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747643/Gemini_Generated_Image_vuidh8vuidh8vuid.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747621/photo_2026-11-03_23-11-04.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "206 cm × 66 cm", price: "$170" },
    ],
    description: "Handmade Tapis Tableau (Lemzerbi) Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-016",
    name: "Moroccan Berber Runner Rug Tableau",
    sku: "RUN-016",
    price: "$120",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747920/Gemini_Generated_Image_c97w55c97w55c97w.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747851/photo_2026-11-03_23-17-12.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "155 cm × 66 cm", price: "$120" },
    ],
    description: "Handmade Tapis Tableau (Lemzerbi) Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-017",
    name: "Moroccan Berber Runner Rug Ouaouzguite",
    sku: "RUN-017",
    price: "$170",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793788787/Gemini_Generated_Image_hi6v9dhi6v9dhi6v.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748240/photo_2026-11-03_23-23-16.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "196 cm × 70 cm", price: "$170" },
    ],
    description: "Handmade Ouaouzguit Berber runner rug from Taznakht, Morocco."
  },
  {
    id: "runner-berber-018",
    name: "Moroccan Berber Runner Rug zanifi Double sides ( black & white)",
    sku: "RUN-018",
    price: "$200",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793788966/Gemini_Generated_Image_r0sudnr0sudnr0su.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748609/photo_2026-11-03_23-29-52.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "214 cm × 86 cm", price: "$200" },
    ],
    description: "Handmade Zanifi Berber runner rug, double-sided (black and white), from Taznakht, Morocco."
  },
  {
    id: "runner-berber-019",
    name: "Moroccan Berber Runner Rug zanifi Double sides ( black & white)",
    sku: "RUN-019",
    price: "$135",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793789294/Gemini_Generated_Image_4kvqfy4kvqfy4kvq.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793749572/photo_2026-11-03_23-45-50.jpg",
    ],
    category: "Runner",
    sizes: [
      { size: "204 cm × 74 cm", price: "$135" },
    ],
    description: "Handmade Zanifi Berber runner rug, double-sided (black and white), from Taznakht, Morocco."
  },
  {
    id: "ouaouzguite-saffron-013",
    name: "Ouaouzguite Saffron Heritage",
    sku: "OUA-013",
    price: "$240",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793713872/Tapis_berbe%CC%80re_rouge_a%CC%80_me%CC%81daillon_ge%CC%81ome%CC%81trique.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712928/photo_2026-11-03_13-34-58.jpg",
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "200 × 112 cm", price: "$240" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-saffron",
    name: "Ouaouzguit White and Black Wool Rug",
    sku: "OUA-011",
    price: "$600",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622604/Design_sans_titre_24.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622604/Design_sans_titre_25.png",
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "254 × 152 cm", price: "$600" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-berber",
    name: "Ouaouzguit berber rug from Taznakht, Siroua Mountains, Morocco",
    sku: "OUA-013",
    price: "$230",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793983312/Gemini_Generated_Image_mzkbdomzkbdomzkb.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793983302/Gemini_Generated_Image_l0oajvl0oajvl0oa.jpg",
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "202 × 113 cm", price: "$230" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "glaoui-royal-masterpiece-615",
    name: "Royal Glaoui Masterpiece Carpet",
    sku: "GLA-ROYAL-615",
    price: "$4500",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1790470338/Photo_Background_Removal_6.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1790469850/WhatsApp_Image_2026-09-25_at_18.52.41_1.jpg",
    ],
    category: "Glaoui",
    sizes: [
      { size: "615 × 340 cm", price: "$4500" }
    ],
    description: "Handmade Glaoui Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "glaoui-royal-masterpiece-616",
    name: "Glaoui Masterpiece Carpet",
    sku: "GLA-ROYAL-616",
    price: "$400",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172183/1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172193/photo_2026-10-16_17-06-53.jpg",
    ],
    category: "Glaoui",
    sizes: [
      { size: "205 × 106 cm", price: "$400" }
    ],
    description: "Handwoven by skilled Amazigh women in Taznakht, Morocco."
  },
  {
    id: "glaoui-royal-masterpiece-617",
    name: "Royal Glaoui Masterpiece Carpet",
    sku: "GLA-ROYAL-617",
    price: "$1500",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793639266/b2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793639246/Design_sans_titre_36.png",
    ],
    category: "Glaoui",
    sizes: [
      { size: "330 × 213 cm", price: "$1500" }
    ],
    description: "An exceptional, museum-grade royal Glaoui masterpiece rug."
  },
  {
    id: "glaoui-royal-masterpiece-618",
    name: "Royal Glaoui Masterpiece Carpet",
    sku: "GLA-ROYAL-618",
    price: "$275",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793641212/Gemini_Generated_Image_3rbfxh3rbfxh3rbf.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793640779/photo_2026-11-02_17-16-17.jpg",
    ],
    category: "Glaoui",
    sizes: [
      { size: "200 × 117 cm", price: "$275" }
    ],
    description: "An exceptional, museum-grade royal Glaoui masterpiece rug."
  },
  {
    id: "glaoui-royal-masterpiece-619",
    name: "Royal Glaoui Masterpiece Carpet",
    sku: "GLA-ROYAL-619",
    price: "$180",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793642856/Gemini_Generated_Image_q35mdoq35mdoq35m.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793642124/photo_2026-11-02_17-43-04.jpg",
    ],
    category: "Glaoui",
    sizes: [
      { size: "146 × 104 cm", price: "$180" }
    ],
    description: "Handmade Glaoui Berber rug from Taznakht, Siroua Mountains, Morocco."
  },
  {
    id: "ouaouzguite-custom-0033",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-005",
    price: "$75",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599840/5-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599869/5-2.jpg",
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "104 × 66 cm", price: "$75" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
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
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "238 × 138 cm", price: "$270" },
    ],
    description: "Handmade Ouaouzguit Berber rug from Taznakht, Siroua Mountains, Morocco."
  }
];

export const collectionsData = [
  {
    id: "runner",
    slug: "runner",
    category: "Runner",
    name: "Runner",
    seoName: "Runner Berber Rugs",
    subtitle: "RUNNER RUGS",
    description: "Authentic handmade Moroccan Berber runner rugs handwoven in Taznakht, Morocco. Perfect for narrow spaces, corridors, and long hallways.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793789580/Gemini_Generated_Image_nm0tasnm0tasnm0t.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718935/Gemini_Generated_Image_slx81oslx81oslx8.jpg"
    ],
  },
  {
    id: "ouaouzguit",
    slug: "ouaouzguit",
    category: "Ouaouzguit",
    name: "Ouaouzguit",
    seoName: "Ouaouzguit Berber Rugs",
    subtitle: "BERBER RUGS",
    description: "Traditional Ouaouzguit Berber rugs handwoven in Taznakht, Morocco, using natural wool and traditional Amazigh weaving techniques.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598160/produit2-4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789622604/Design_sans_titre_24.png"
    ],
  },
  {
    id: "glaoui",
    slug: "glaoui",
    name: "Glaoui",
    category: "Glaoui",
    seoName: "Glaoui Berber Rugs",
    subtitle: "BERBER RUGS",
    description: "Authentic Glaoui Berber rugs from Taznakht, handwoven with wool using traditional Moroccan weaving and embroidery techniques.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789600724/7.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793639266/b2.jpg"
    ],
  },
  {
    id: "mouzaik",
    slug: "mouzaik",
    category: "Mouzaik",
    name: "Mouzaïk",
    seoName: "Mouzaïk Berber Rugs",
    subtitle: "BERBER RUGS",
    description: "Mouzaïk Berber rugs featuring geometric wool and woven patterns inspired by traditional Amazigh symbols and Moroccan craftsmanship.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604336/10-1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789604763/12.png"
    ],
  },
  {
    id: "akhenif",
    slug: "akhenif",
    category: "Akhenif",
    name: "Akhenif",
    seoName: "Akhenif Berber Rugs",
    subtitle: "BERBER RUGS",
    description: "Handwoven Akhenif Berber rugs from Taznakht, made with natural sheep's wool, traditional Amazigh symbols, and authentic Moroccan craftsmanship.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789595596/akhenif-p1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789596807/akhenif-p2-1.png"
    ],
  },
  {
    id: "tableau",
    slug: "tableau",
    category: "Tableau",
    name: "Tapis Tableau",
    seoName: "Moroccan Tapis Tableau Rugs",
    subtitle: "TAPIS TABLEAU",
    description: "Handwoven Moroccan Tapis Tableau rugs combining traditional Amazigh craftsmanship, natural wool, artistic patterns, and timeless Moroccan design.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648947/tableau-p1-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-08.jpg"
    ],
  },
  {
    id: "picasso",
    slug: "picasso",
    name: "Picasso Berber",
    category: "Picasso",
    seoName: "Picasso Berber Rugs",
    subtitle: "BERBER RUGS",
    description: "Artistic Picasso-inspired Berber rugs handwoven in Morocco using natural sheep's wool and traditional Amazigh patterns.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605799/picasso-p1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606119/picasso-p2-1.png"
    ],
  },
  {
    id: "zanifi",
    slug: "zanifi",
    name: "Zanifi Berber",
    category: "Zanifi",
    seoName: "Zanifi Berber Rugs",
    subtitle: "ZANIFI RUGS",
    description: "Authentic Zanifi Berber rugs handwoven in Morocco with natural sheep's wool, traditional geometric patterns, and Amazigh craftsmanship.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650258/zanifi-p1-1.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789650567/zanafi-p2-1.png"
    ],
  },
];