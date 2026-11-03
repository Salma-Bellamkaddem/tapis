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
    description: "Hand-made masterpiece combining three traditional techniques (woolen, woven, and embroidered) using pure living sheep's wool from the Siroua Mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    isAvailable: true ,
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
    description: `A beautiful set of six handmade Akhenif rugs, traditionally woven by Moroccan rural women using living sheep’s wool. Featuring warm mustard and ochre tones, authentic Amazigh geometric patterns, and traditional Berber symbols, each piece reflects the rich weaving heritage of Taznakht, Morocco.

    Perfect as bedside rugs or decorative accents, this unique collection brings warmth, authenticity, and Moroccan craftsmanship into your home.
    
    Set Includes:
    
    - 1 large rug: 300 × 186 cm
    
    - 5 small rugs: 100 × 68 cm each
    
    Handwoven with care, every piece is unique and carries the story of Moroccan Berber craftsmanship.`
    
    }
    ,
    {
      id: "akhenif-005",
      name: "Akhenif Berber Carpet",
      sku: "AKH-005",
      price: "$65",
      isAvailable: true,
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
      category: "Akhenif",
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
      sku: "AKH-007",
      price: "$180",
      isAvailable: true,
      images: ["https://res.cloudinary.com/ln4u8wnx/image/upload/v1793713574/Capture_d_e%CC%81cran_2026-11-03_a%CC%80_13.46.19.png",
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
    category: "picasso",
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
    category: "picasso",
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
    category: "picasso",
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
    category: "picasso",
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
    category: "picasso",
    sizes: [
      { size: "150 × 100 cm", price: "$200" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "Hand-embroidered technique crafted with living sheep's wool and traditional Berber symbols. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "picasso",
    sizes: [
      { size: "250 × 155 cm", price: "$450" },
    ],
    description: "Artistic Picasso-inspired Berber creation crafted with living sheep's wool and traditional patterns. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-tableau-004",
    name: "Akhenif Berber",
    sku: "TAB-004",
    price: "$170",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-08.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-08.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-10.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643253/photo_2026-11-02_18-12-12.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793643254/photo_2026-11-02_18-12-18.jpg"
    ],
    category: "tableau",
    sizes: [
      { size: "158 × 107 cm", price: "$170" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "tableau",
    sizes: [
      { size: "110 × 73 cm", price: "$60" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-tableau-005",
    name: "Akhenif Berber",
    sku: "TAB-005",
    price: "$135",
    isAvailable:true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793655391/Design_sans_titre_38.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-12.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-14.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-16.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793654353/photo_2026-11-02_21-17-18.jpg"
    ],
    category: "tableau",
    sizes: [
      { size: "165 × 90 cm", price: "$135" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
  },
  {
    id: "akhenif-tableau-008",
    name: "Akhenif Berber",
    sku: "TAB-008",
    price: "$190",
    isAvailable:true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702735/photo_2026-11-03_10-46-22.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793703383/Moroccan_Rug_with_Colorful_Geometric_Motifs.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702536/photo_2026-11-03_10-41-00.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702541/photo_2026-11-03_10-41-02.jpg",
    
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793702536/photo_2026-11-03_10-41-04.jpg"
    ],
    category: "tableau",
    sizes: [
      { size: "152 × 109 cm", price: "$190" },
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
    category: "tableau",
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
    category: "tableau",
    sizes: [
      { size: "264 × 134 cm", price: "$400" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793663290/photo_2026-11-02_23-47-40.jpg"
    ],
    category: "tableau",
    sizes: [
      { size: "152 × 109 cm", price: "$190" },
    ],
    description: "Hand-woven art technique containing living sheep's wool and natural colors. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "tableau",
    sizes: [
      { size: "150 × 106 cm", price: "$185" },
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
    category: "Mouzaik",
    sizes: [
      { size: "250 × 146 cm", price: "$350" },
    ],
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors, hand-crafted by women artisans in the Siroua Mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "Handcrafted Mouzaïk carpet showcasing traditional woolen squares and authentic symbols of the Siroua Mountains, woven by women artisans. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "An exquisite Mouzaïk carpet featuring intricate geometric square patterns and traditional Berber weaving techniques passed down through generations. HAND MADE BY MOROCCAN RURAL WOMEN."
  },

  {
    id: "mouzaik-004",
    name: "Mouzaïk Berber",
    sku: "MOU-004",
    price: "$130",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793663085/Tapis_berbe%CC%80re_marocain_ge%CC%81ome%CC%81trique_colore%CC%81.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662521/photo_2026-11-02_23-31-36.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662519/photo_2026-11-02_23-31-35.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662517/photo_2026-11-02_23-31-31.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793662521/photo_2026-11-02_23-31-36.jpg"
    ],
    category: "Mouzaik",
    sizes: [
      { size: "154 × 66 cm", price: "$130" },
    ],
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors, hand-crafted by women artisans in the Siroua Mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793714741/photo_2026-11-03_14-02-19.jpg",

    ],
    category: "Mouzaik",
    sizes: [
      { size: "312 × 200 cm", price: "$950" },
    ],
    description: "Features woolen and woven squares with traditional Berber symbols and natural colors, hand-crafted by women artisans in the Siroua Mountains. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "Ouaouzguit",
    sizes: [
      { size: "207 × 162 cm", price: "$300" },
    ],
    description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional Siroua Mountains craftsmanship. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    category: "Ouaouzguit",
    sizes: [
      { size: "246 × 152 cm", price: "$350" },
    ],
    description: "This Ouaouzguite Berber carpet is a beautiful example of traditional Moroccan craftsmanship, inspired by the colorful weaving traditions of the Siroua regions. This vibrant red wool carpet features intricate and colorful geometric patterns, including central diamond motifs and detailed borders. It incorporates traditional Berber symbols and vibrant colors such as blue, yellow and white, creating an authentic and graphic contrast against the red background. Its hand-knotted texture and carefully crafted finishes make it a distinctive piece, perfect for creating a warm and authentic interior. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-royal-008",
    name: "Ouaouzguite Royal Masterpiece",
    sku: "OUA-008",
    price: "$270",
    isAvailable:false,
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
    description: "Ouaouzguite Berber carpet crafted with living sheep's wool from the Siroua Mountains and natural colors. Main features: a large central diamond (an emblematic motif associated with protection and fertility), nested motifs at temporal heart of the central medallion in ochre and brick tones, a bold palette of terracotta red, midnight blue and sand, a detailed geometric border, and hand-knotted fringes. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    description: "This Ouaouzguite Berber carpet is a beautiful example of traditional Moroccan craftsmanship, inspired by the colorful weaving traditions of the Siroua regions. Its patchwork-style composition combines different geometric motifs, including zigzags, diamonds, diagonal lines and checkerboard patterns. The traditional Berber symbols and geometric motifs carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. Its vibrant combination of mustard yellow, red, deep blue, black and white gives the carpet a unique and joyful character, while its carefully crafted borders and hand-finished fringes add to its traditional charm. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. HAND MADE BY MOROCCAN RURAL WOMEN"
  },
  {
    id: "ouaouzguite-custom-010",
    name: "Ouaouzguite Berber Carpet",
    sku: "OUA-010",
    price: "$4000",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1792171119/2.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1792171120/3.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1792171142/photo_2026-10-16_17-07-18.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1792171142/photo_2026-10-16_17-07-20.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1792171143/photo_2026-10-16_17-07-24.jpg"
    ],
    category: "Ouaouzguit",
    sizes: [
      { size: "485 × 150 cm", price: "$4000" },
    ],
"description": "This Ouaouzguite Berber rug is a beautiful example of traditional Moroccan craftsmanship, inspired by the rich weaving heritage of the Siroua region. Handwoven by skilled Amazigh women in Taznakht, Morocco, it features a warm terracotta-red base, ivory diamond motifs, and distinctive black geometric details. Its traditional patterns and rich textures reflect the cultural heritage of the region, bringing warmth and authentic Moroccan character to any interior. The geometric motifs, including diamonds, zigzags, and decorative lines, reflect traditional Amazigh artistic expression and the cultural knowledge passed down through generations. Its harmonious combination of terracotta red, ivory, and deep black gives the rug a timeless and distinctive character. Handwoven using traditional Berber techniques, it is crafted from wool sourced from living sheep and may incorporate natural dyes derived from ingredients such as saffron, henna, almond skins, and pomegranate skins. Carefully crafted by Moroccan rural women artisans, each rug is unique, celebrating their skill, creativity, and living cultural heritage. Durable, comfortable, and full of character, this handmade Ouaouzguite rug brings authentic Moroccan artistry into any space. HANDWOVEN BY AMAZIGH WOMEN IN TAZNAKHT, MOROCCO."  },
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
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793658829/photo_2026-11-02_22-34-32.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793658832/photo_2026-11-02_22-34-33.jpg"
  ],
  category: "Ouaouzguit",
  sizes: [
    { size: "126 × 72 cm", price: "$75" },
  ],
  description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional Siroua Mountains craftsmanship. HAND MADE BY MOROCCAN RURAL WOMEN."
},


//runner 


{
  id: "runner-berber-001",
  name: "Moroccan Berber Runner Rug Ouaouzguite ",
  sku: "RUN-001",
  price: "$125",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718935/Gemini_Generated_Image_slx81oslx81oslx8.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718344/photo_2026-11-03_14-56-22.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718348/photo_2026-11-03_14-56-24.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718353/photo_2026-11-03_14-56-26.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793719168/Gemini_Generated_Image_ucmawzucmawzucma.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793718363/photo_2026-11-03_14-56-28.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "180 cm × 76 cm", price: "$125" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-002",
  name: "Moroccan Berber Runner Rug Ouaouzguite ",
  sku: "RUN-002",
  price: "$150",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721493/Gemini_Generated_Image_sxat39sxat39sxat.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721563/Gemini_Generated_Image_d8uan5d8uan5d8ua.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721083/photo_2026-11-03_15-51-24.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721133/photo_2026-11-03_15-51-30.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721087/photo_2026-11-03_15-51-27.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793721240/photo_2026-11-03_15-54-59.jpg",
  ],
  category: "Runner",
  sizes: [
    { size: "202 cm × 75 cm", price: "$150" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},


{
  id: "runner-berber-003",
  name: "Moroccan Berber Runner Rug Glaoui ",
  sku: "RUN-003",
  price: "$225",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723389/Gemini_Generated_Image_6u3dkc6u3dkc6u3d_1.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723205/Gemini_Generated_Image_za5fwxza5fwxza5f.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793722651/photo_2026-11-03_16-18-18.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793722802/photo_2026-11-03_16-18-21.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723100/photo_2026-11-03_16-18-23.jpg",

  ],
  category: "Runner",
  sizes: [
    { size: "233 cm × 72 cm", price: "$225" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-004",
  name: "Moroccan Berber Runner Rug Glaoui ",
  sku: "RUN-004",
  price: "$130",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723988/Gemini_Generated_Image_kvhmedkvhmedkvhm.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723858/photo_2026-11-03_16-34-39.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723862/photo_2026-11-03_16-34-40.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793723867/photo_2026-11-03_16-34-42.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724088/Gemini_Generated_Image_4wvstj4wvstj4wvs.jpg",

  ],
  category: "Runner",
  sizes: [
    { size: "180 cm × 77 cm", price: "$130" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-005",
  name: "Moroccan Berber Runner Rug Glaoui ",
  sku: "RUN-005",
  price: "$110",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724622/Gemini_Generated_Image_dnz3kudnz3kudnz3.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724884/Gemini_Generated_Image_bjt5rybjt5rybjt5.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724518/photo_2026-11-03_16-44-26.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793724518/photo_2026-11-03_16-44-28.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "162 cm × 62 cm", price: "$110" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-006",
  name: "Moroccan Berber Runner Rug Mouzaïk  ",
  sku: "RUN-006",
  price: "$160",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793727839/Gemini_Generated_Image_cbqf17cbqf17cbqf.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793725110/photo_2026-11-03_16-58-32.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793725110/photo_2026-11-03_16-58-33.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793725095/photo_2026-11-03_16-58-29.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793728332/Gemini_Generated_Image_cqgf5scqgf5scqgf.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "204 cm × 65 cm", price: "$160" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-007",
  name: "Moroccan Berber Runner Rug Mouzaïk  ",
  sku: "RUN-007",
  price: "$110",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793729530/Gemini_Generated_Image_ywj0t5ywj0t5ywj0.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793729484/photo_2026-11-03_18-02-20.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793729504/photo_2026-11-03_18-02-34.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793729491/photo_2026-11-03_18-02-22.jpg",
  ],
  category: "Runner",
  sizes: [
    { size: "160 cm × 68 cm", price: "$110" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-008",
  name: "Moroccan Berber Runner Rug Akhenif  ",
  sku: "RUN-008",
  price: "$180",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793743879/Gemini_Generated_Image_ygyh04ygyh04ygyh.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730290/photo_2026-11-03_18-20-03.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730297/photo_2026-11-03_18-20-05.jpg",
  ],
  category: "Runner",
  sizes: [
    { size: "200 cm × 66 cm", price: "$180" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-009",
  name: "Moroccan Berber Runner Rug Akhenif  ",
  sku: "RUN-009",
  price: "$165",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793744064/Gemini_Generated_Image_uh5wnjuh5wnjuh5w.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730543/photo_2026-11-03_18-28-59.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730550/photo_2026-11-03_18-29-02.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730545/photo_2026-11-03_18-28-57.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "200 cm × 72 cm", price: "$165" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-010",
  name: "Moroccan Berber Runner Rug Akhenif  ",
  sku: "RUN-010",
  price: "$230",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793744266/Gemini_Generated_Image_i8esfji8esfji8es.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730850/photo_2026-11-03_18-33-09.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730804/photo_2026-11-03_18-33-02.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730824/photo_2026-11-03_18-33-08.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793730867/photo_2026-11-03_18-33-07.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "246 cm × 62 cm", price: "$230" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-011",
  name: "Moroccan Berber Runner Rug Akhenif  ",
  sku: "RUN-011",
  price: "$185",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745131/Gemini_Generated_Image_ezkd6eezkd6eezkd.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793731125/photo_2026-11-03_18-39-03.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793731120/photo_2026-11-03_18-39-01.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793731101/photo_2026-11-03_18-38-55.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793731094/photo_2026-11-03_18-38-51.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "200 cm × 60 cm", price: "$185" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-012",
  name: "Moroccan Berber Runner Rug Picasso ",
  sku: "RUN-012",
  price: "$150",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745273/Gemini_Generated_Image_wvjdkdwvjdkdwvjd.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793742861/photo_2026-11-03_18-44-44.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793742868/photo_2026-11-03_18-44-45.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793743650/photo_2026-11-03_18-44-47.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745390/Gemini_Generated_Image_y3qswby3qswby3qs.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "155 cm × 70 cm", price: "$150" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-013",
  name: "Moroccan Berber Runner Rug Picasso ",
  sku: "RUN-013",
  price: "$220",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793746056/Gemini_Generated_Image_9a00gq9a00gq9a00.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745931/photo_2026-11-03_22-39-41.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793745567/photo_2026-11-03_22-39-44.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793746005/photo_2026-11-03_22-39-46.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "208 cm × 60 cm", price: "$220" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-014",
  name: "Moroccan Berber Runner Rug Picasso ",
  sku: "RUN-014",
  price: "$120",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747191/Gemini_Generated_Image_d9bwujd9bwujd9bw.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747177/photo_2026-11-03_22-51-19.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793746632/photo_2026-11-03_22-51-17.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793746633/photo_2026-11-03_22-51-18.jpg"
  ],
  category: "Runner",
  sizes: [
    { size: "156 cm × 70 cm", price: "$120" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-015",
  name: "Moroccan Berber Runner Rug Tableau ",
  sku: "RUN-015",
  price: "$170",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747643/Gemini_Generated_Image_vuidh8vuidh8vuid.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747621/photo_2026-11-03_23-11-04.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747620/photo_2026-11-03_23-11-06.jpg",
  ],
  category: "Runner",
  sizes: [
    { size: "206 cm × 66 cm", price: "$170" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-016",
  name: "Moroccan Berber Runner Rug Tableau ",
  sku: "RUN-016",
  price: "$120",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747920/Gemini_Generated_Image_c97w55c97w55c97w.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747851/photo_2026-11-03_23-17-12.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747852/photo_2026-11-03_23-17-14.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793747859/photo_2026-11-03_23-17-20.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748038/photo_2026-11-03_23-21-43.jpg"

  ],
  category: "Runner",
  sizes: [
    { size: "155 cm × 66 cm", price: "$120" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},

{
  id: "runner-berber-017",
  name: "Moroccan Berber Runner Rug Ouaouzguite ",
  sku: "RUN-017",
  price: "$170",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748328/photo_2026-11-03_23-23-10.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748240/photo_2026-11-03_23-23-16.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748267/photo_2026-11-03_23-23-19.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748269/photo_2026-11-03_23-23-23.jpg",

  ],
  category: "Runner",
  sizes: [
    { size: "196 cm × 70 cm", price: "$170" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-018",
  name: "Moroccan Berber Runner Rug zanifi Double sides ( black & white) ",
  sku: "RUN-018",
  price: "$200",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748607/photo_2026-11-03_23-29-50.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748609/photo_2026-11-03_23-29-52.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748611/photo_2026-11-03_23-29-55.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793748613/photo_2026-11-03_23-29-57.jpg",

  ],
  category: "Runner",
  sizes: [
    { size: "214 cm × 86 cm", price: "$200" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
},
{
  id: "runner-berber-019",
  name: "Moroccan Berber Runner Rug zanifi Double sides ( black & white) ",
  sku: "RUN-019",
  price: "$135",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793749566/photo_2026-11-03_23-45-37.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793749572/photo_2026-11-03_23-45-50.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793749568/photo_2026-11-03_23-45-41.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793749570/photo_2026-11-03_23-45-47.jpg",

  ],
  category: "Runner",
  sizes: [
    { size: "204 cm × 74 cm", price: "$135" },
  ],
  description: "Authentic handmade Moroccan Berber runner rug, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Designed specifically for long hallways and corridors. HAND MADE BY MOROCCAN RURAL WOMEN."
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
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712932/photo_2026-11-03_13-35-00.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793712936/photo_2026-11-03_13-35-02.jpg",

  ],
  category: "Ouaouzguit",
  sizes: [
    { size: "200 × 112 cm", price: "$240" },
  ],
  description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional Siroua Mountains craftsmanship. HAND MADE BY MOROCCAN RURAL WOMEN."
},

{
  id: "ouaouzguite-saffron",
  name: "Ouaouzguite Saffron Heritage",
  sku: "OUA-011",
  price: "$600",
  isAvailable: true,
  images: [
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622604/Design_sans_titre_24.png",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622604/Design_sans_titre_25.png",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622362/photo_2026-11-02_12-20-36.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622362/photo_2026-11-02_12-20-43.jpg",
    "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793622362/photo_2026-11-02_12-20-42.jpg"
  ],
  category: "Ouaouzguit",
  sizes: [
    { size: "254 × 152 cm", price: "$600" },
  ],
  description: "Crafted with thousands of tight knots, this Ouaouzguite rug radiates warm saffron and ruby tones, representing traditional Siroua Mountains craftsmanship. HAND MADE BY MOROCCAN RURAL WOMEN."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1790469849/WhatsApp_Image_2026-09-25_at_18.52.34.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "615 × 340 cm", price: "$4500" }
    ],
    description: "An exceptional, museum-grade royal Glaoui masterpiece rug measuring 6.15m × 3.40m. Hand-crafted combining three traditional techniques (woolen, flatweave, and intricate embroidery) using pure living sheep's wool and rich natural dyes by master women artisans in the Siroua Mountains. A breathtaking statement piece designed for grand architectural interiors and luxury residences. HAND MADE BY MOROCCAN RURAL WOMEN."
  },


  {
    id: "glaoui-royal-masterpiece-616",
    name: " Glaoui Masterpiece Carpet",
    sku: "GLA-ROYAL-616",
    price: "$400",
    isAvailable: true,
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172183/1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172193/photo_2026-10-16_17-06-53.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172171/photo_2026-10-16_17-06-56.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172171/photo_2026-10-16_17-06-59.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1792172171/photo_2026-10-16_17-07-01.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "205 × 106 cm", price: "$400" }
    ],
    description: "Handwoven by skilled Amazigh women in Taznakht, Morocco, this Glaoui rug showcases vibrant geometric patterns in red, blue, ivory, black, and warm earthy tones. Its distinctive diamond motifs, intricate borders, and rich textures reflect the region’s traditional weaving heritage. A unique handmade piece that brings authentic Moroccan artistry, cultural character, and timeless warmth to any interior."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793639249/b3.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793639249/b4.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793639263/b5.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "330 × 213 cm", price: "$1500" }
    ],
    description: "An exceptional, museum-grade royal Glaoui masterpiece rug measuring 3.30m × 2.13m. Hand-crafted combining three traditional techniques (woolen, flatweave, and intricate embroidery) using pure living sheep's wool and rich natural dyes by master women artisans in the Siroua Mountains. A breathtaking statement piece designed for grand architectural interiors and luxury residences. HAND MADE BY MOROCCAN RURAL WOMEN."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793640886/photo_2026-11-02_17-16-20.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793640759/photo_2026-11-02_17-16-22.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793640775/photo_2026-11-02_17-16-24.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "200 × 117 cm", price: "$275" }
    ],
    description: "An exceptional, museum-grade royal Glaoui masterpiece rug measuring 3.30m × 2.13m. Hand-crafted combining three traditional techniques (woolen, flatweave, and intricate embroidery) using pure living sheep's wool and rich natural dyes by master women artisans in the Siroua Mountains. A breathtaking statement piece designed for grand architectural interiors and luxury residences. HAND MADE BY MOROCCAN RURAL WOMEN."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793642123/photo_2026-11-02_17-43-08.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793640759/photo_2026-11-02_17-16-22.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/v1793640775/photo_2026-11-02_17-16-24.jpg"
    ],
    category: "Glaoui",
    sizes: [
      { size: "146 × 104 cm", price: "$180" }
    ],
    description: "An exceptional, museum-grade royal Glaoui masterpiece rug measuring 3.30m × 2.13m. Hand-crafted combining three traditional techniques (woolen, flatweave, and intricate embroidery) using pure living sheep's wool and rich natural dyes by master women artisans in the Siroua Mountains. A breathtaking statement piece designed for grand architectural interiors and luxury residences. HAND MADE BY MOROCCAN RURAL WOMEN."
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
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789599911/5-3.jpg"
    ],
    category: "Ouaouzguit",
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
    category: "Ouaouzguit",
    sizes: [
      { size: "238 × 138 cm", price: "$270" },
    ],
    description: "This Moroccan wool carpet features a deep red background with a large central eight-pointed star in blue and cream tones. Its geometric patterns and traditional Berber symbols, framed by an intricate border, make it an authentic and highly graphic piece of Moroccan craftsmanship. Ouaouzguite Berber carpet, hand-woven using traditional Berber techniques. Made with thousands of small hand-woven knots using wool from living sheep and natural colors such as saffron, henna, almond skins and pomegranate skins. Easy to wash, comfortable and highly durable, it can last for many years and becomes more beautiful with time. The traditional Berber symbols and geometric motifs woven into the carpet carry cultural meanings passed down through generations, representing protection, femininity, fertility, nature, family and the heritage of Moroccan rural women artisans. HAND MADE BY MOROCCAN RURAL WOMEN"
  }
];

export const collectionsData = [
  // Dans @/data/products.ts (tableau collectionsData)
  {
    id: "runner",
    slug: "runner",
    category: "Runner",
    name: "Runner",
    seoName: "Runner Berber Rugs",
    subtitle: "RUNNER RUGS",
    description:
      "Authentic handmade Moroccan Berber runner rugs handwoven in Taznakht, Morocco. Perfect for narrow spaces, corridors, and long hallways.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598160/produit2-4.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598460/produit2-2.jpg",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789598444/produit2-3.jpg",
    ],
  },
  {
    id: "ouaouzguit",

    slug: "ouaouzguit",
  
    category: "Ouaouzguite",
  
    name: "Ouaouzguit",
    seoName: "Ouaouzguit Berber Rugs",
    subtitle: "BERBER RUGS",
    description:
      "Traditional Ouaouzguit Berber rugs handwoven in Taznakht, Morocco, using natural wool and traditional Amazigh weaving techniques.",
    images: [
      "/placeholders/ouaouzguite-1.webp",
      "/placeholders/ouaouzguite-2.webp",
      "/placeholders/ouaouzguite-3.webp",
    ],
  },

  {
    id: "glaoui",
    slug: "glaoui",
    name: "Glaoui",
    category: "Glaoui",
    seoName: "Glaoui Berber Rugs",
    subtitle: "BERBER RUGS",
    description:
      "Authentic Glaoui Berber rugs from Taznakht, handwoven with wool using traditional Moroccan weaving and embroidery techniques.",
    images: [
      "/placeholders/glaoui-2.jpeg",
      "/placeholders/glaoui-2.jpeg",
      "/placeholders/glaoui-3.jpeg",
    ],
  },

  {
    id: "mouzaik",
    slug: "mouzaik",
    category:"mouzaik",
    name: "Mouzaïk",
    seoName: "Mouzaïk Berber Rugs",
    subtitle: "BERBER RUGS",
    description:
      "Mouzaïk Berber rugs featuring geometric wool and woven patterns inspired by traditional Amazigh symbols and Moroccan craftsmanship.",
    images: [
      "/placeholders/mouzaik-2.jpeg",
      "/placeholders/mouzaik-1.jpeg",
      "/placeholders/mouzaik-3.jpeg",
    ],
  },

  {
    id: "akhenif",
    slug: "akhenif",
    category: "Akhenif",
    name: "Akhenif",
    seoName: "Akhenif Berber Rugs",
    subtitle: "BERBER RUGS",
    description:
      "Handwoven Akhenif Berber rugs from Taznakht, made with natural sheep's wool, traditional Amazigh symbols, and authentic Moroccan craftsmanship.",
    images: [
      "/placeholders/akhenif-1.jpeg",
      "/placeholders/akhenif-2.jpeg",
      "/placeholders/akhenif-3.jpeg",
    ],
  },

  {
    id: "tableau",
    slug: "tableau",
    category: "tableau",
    name: "Tapis Tableau",
    seoName: "Moroccan Tapis Tableau Rugs",
    subtitle: "TAPIS TABLEAU",
    description:
      "Handwoven Moroccan Tapis Tableau rugs combining traditional Amazigh craftsmanship, natural wool, artistic patterns, and timeless Moroccan design.",
    images: [
      "/placeholders/tableau-1.jpeg",
      "/placeholders/tableau-2.png",
      "/placeholders/tableau-3.jpeg",
    ],
  },

  {
    id: "picasso",
    slug: "picasso",
    name: "Picasso Berber",
    category:"picasso",
    seoName: "Picasso Berber Rugs",
    subtitle: "BERBER RUGS",
    description:
      "Artistic Picasso-inspired Berber rugs handwoven in Morocco using natural sheep's wool and traditional Amazigh patterns.",
    images: [
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789648378/picasso-p4-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789606119/picasso-p2-1.png",
      "https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789605910/picasso-p1-3.jpg",
    ],
  },

  {
    id: "zanifi",
    slug: "zanifi",
    name: "Zanifi Berber",
    seoName: "Zanifi Berber Rugs",
    subtitle: "ZANIFI RUGS",
    description:
      "Authentic Zanifi Berber rugs handwoven in Morocco with natural sheep's wool, traditional geometric patterns, and Amazigh craftsmanship.",
    images: [
      "/placeholders/zanifi-1.jpeg",
      "/placeholders/zanifi-2.jpeg",
      "/placeholders/zanifi-3.jpg",
    ],
  },
];