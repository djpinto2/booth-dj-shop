export type Category = "players" | "mixers" | "all-in-one";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  model: string;
  category: Category;
  tagline: string;
  description: string;
  price: number;
  /** Precio de lista de referencia (para mostrar ahorro) */
  compareAt?: number;
  badge?: string;
  images: { src: string; alt: string; dark?: boolean }[];
  highlights: string[];
  specs: { label: string; value: string }[];
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Todo" },
  { id: "players", label: "Players" },
  { id: "mixers", label: "Mixers" },
  { id: "all-in-one", label: "All-in-one" },
];

export const categoryLabel: Record<Category, string> = {
  players: "Multi Player",
  mixers: "Mixer",
  "all-in-one": "Sistema All-in-one",
};

export const products: Product[] = [
  {
    slug: "cdj-3000-w",
    name: "CDJ-3000",
    brand: "Pioneer DJ",
    model: "CDJ-3000-W",
    category: "players",
    tagline: "El estándar de cabina. Edición blanca.",
    description:
      "El multi player insignia, rediseñado desde cero alrededor de un MPU dedicado. Carga de tracks instantánea, Key Shift de alta calidad y una pantalla táctil HD de 9\" que te deja navegar, previsualizar y cuear sin sacar la vista del set. Esta edición limitada en blanco lleva el estándar de los clubes al escenario con otra presencia.",
    price: 2699,
    compareAt: 2899,
    badge: "Edición limitada",
    images: [{ src: "/media/cdj-3000.jpg", alt: "Pioneer DJ CDJ-3000 blanco, vista frontal" }],
    highlights: [
      "Pantalla táctil HD de 9\" (1280×720)",
      "MPU dedicado · DSP 96 kHz / 32-bit float",
      "8 Hot Cues + Touch Cue y Touch Preview",
      "Stacked Waveforms de hasta 4 decks",
    ],
    specs: [
      { label: "Pantalla", value: "Táctil 9\" HD, 1280 × 720" },
      { label: "Procesamiento", value: "MPU · 96 kHz / 32-bit floating point" },
      { label: "Hot Cues", value: "8 botones dedicados" },
      { label: "Funciones", value: "Key Shift, Key Sync, Touch Cue, Touch Preview, Beat Jump" },
      { label: "Formatos", value: "MP3, AAC, WAV, AIFF, FLAC, ALAC" },
      { label: "Medios", value: "USB, tarjeta SD, rekordbox (link)" },
      { label: "Red", value: "PRO DJ LINK — hasta 6 unidades" },
      { label: "Salidas", value: "Analógica RCA, Digital coaxial, LAN" },
      { label: "Dimensiones", value: "329 × 118,5 × 453 mm" },
      { label: "Peso", value: "5,2 kg" },
    ],
  },
  {
    slug: "djm-a9",
    name: "DJM-A9",
    brand: "Pioneer DJ",
    model: "DJM-A9",
    category: "mixers",
    tagline: "Cuatro canales. Sonido de referencia.",
    description:
      "El nuevo mixer de club de 4 canales. Conversores de alta gama, una sección de efectos rediseñada con pantalla a color y X-PAD, Sound Color FX nuevos y entrada Bluetooth. Pensado para cabinas donde cada detalle de sonido importa.",
    price: 2899,
    badge: "Nuevo",
    images: [
      { src: "/media/djm-a9.png", alt: "Pioneer DJ DJM-A9, vista en ángulo" },
      { src: "/media/djm-a9-rear.jpg", alt: "Panel trasero del DJM-A9 con conexiones" },
    ],
    highlights: [
      "4 canales · respuesta 20 Hz – 40 kHz",
      "Beat FX con pantalla a color y X-PAD",
      "6 Sound Color FX + Mic Reverb",
      "Entrada Bluetooth y 2 puertos USB-C",
    ],
    specs: [
      { label: "Canales", value: "4" },
      { label: "Respuesta en frecuencia", value: "20 Hz – 40 kHz (LINE)" },
      { label: "Relación S/N", value: "114 dB (USB, Digital IN) · 105 dB (LINE) · 88 dB (PHONO)" },
      { label: "THD", value: "0,005 % (LINE – MASTER1)" },
      { label: "Entradas", value: "4 Digital coaxial, 4 Line RCA, 4 Phono RCA, 2 Mic" },
      { label: "Salidas", value: "Master 1 (XLR), Master 2, Booth, Rec Out, Digital Out, 2 × Phones" },
      { label: "Efectos", value: "Beat FX + X-PAD, Sound Color FX, Mic FX" },
      { label: "Conectividad", value: "Bluetooth, 2 × USB-C, LINK, MIDI" },
      { label: "Consumo", value: "46 W" },
      { label: "Dimensiones", value: "407,4 × 107,9 × 458,3 mm" },
      { label: "Peso", value: "10,2 kg" },
    ],
  },
  {
    slug: "xdj-az",
    name: "XDJ-AZ",
    brand: "AlphaTheta",
    model: "XDJ-AZ",
    category: "all-in-one",
    tagline: "Un club entero. Cuatro canales, una sola unidad.",
    description:
      "El primer all-in-one verdaderamente de 4 canales en formato estándar de club. Jogs de tamaño completo, pantalla táctil de 10,1\", Wi-Fi integrado para tocar desde la nube o servicios de streaming, y SonicLink para monitorear con auriculares inalámbricos sin latencia.",
    price: 3199,
    badge: "Flagship",
    images: [{ src: "/media/xdj-az.jpg", alt: "AlphaTheta XDJ-AZ, sistema all-in-one de 4 canales" }],
    highlights: [
      "4 canales standalone en layout de club",
      "Pantalla táctil capacitiva de 10,1\"",
      "Jogs full-size de 206 mm",
      "Wi-Fi: CloudDirectPlay + streaming",
    ],
    specs: [
      { label: "Canales", value: "4 (standalone)" },
      { label: "Pantalla", value: "Táctil capacitiva 10,1\"" },
      { label: "Jog wheels", value: "206 mm, tamaño completo" },
      { label: "Conectividad", value: "Wi-Fi integrado, USB, LAN" },
      { label: "Nube / streaming", value: "rekordbox CloudDirectPlay, StreamingDirectPlay" },
      { label: "Monitoreo", value: "Transmisor SonicLink para auriculares inalámbricos" },
      { label: "Software", value: "rekordbox, Serato DJ Pro" },
      { label: "Efectos", value: "Beat FX + Sound Color FX estilo DJM" },
    ],
  },
  {
    slug: "xdj-rx3",
    name: "XDJ-RX3",
    brand: "Pioneer DJ",
    model: "XDJ-RX3",
    category: "all-in-one",
    tagline: "La cabina profesional, en formato portátil.",
    description:
      "Sistema all-in-one de 2 canales con la pantalla táctil más grande de su generación. Workflow idéntico al de la cabina CDJ/DJM, efectos heredados de los mixers de club y compatibilidad con rekordbox y Serato DJ Pro. Ideal para practicar en casa y tocar en cualquier lado.",
    price: 2099,
    compareAt: 2299,
    images: [{ src: "/media/xdj-rx3.jpg", alt: "Pioneer DJ XDJ-RX3, sistema all-in-one de 2 canales" }],
    highlights: [
      "Pantalla táctil 10,1\" WXGA (1280×800)",
      "14 Beat FX + 6 Sound Color FX",
      "Waveform de 3 bandas",
      "rekordbox y Serato DJ Pro",
    ],
    specs: [
      { label: "Canales", value: "2" },
      { label: "Pantalla", value: "Táctil 10,1\" WXGA, 1280 × 800" },
      { label: "Efectos", value: "14 Beat FX, 6 Sound Color FX" },
      { label: "Formatos", value: "MP3, AAC, WAV, AIFF, FLAC" },
      { label: "Conversor A/D, D/A", value: "24-bit · 44,1 kHz" },
      { label: "Respuesta en frecuencia", value: "20 Hz – 20 kHz" },
      { label: "Software", value: "rekordbox, Serato DJ Pro" },
      { label: "Dimensiones", value: "728,1 × 118,4 × 469,5 mm" },
      { label: "Peso", value: "9,3 kg" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

/** Bundle "Club Booth": 2 × CDJ-3000 + DJM-A9 */
export const bundle = {
  items: [
    { slug: "cdj-3000-w", qty: 2 },
    { slug: "djm-a9", qty: 1 },
  ],
  discount: 0.08,
};
