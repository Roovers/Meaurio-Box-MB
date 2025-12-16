// src/lib/data.ts

export type ProductType = 'botas' | 'remeras' | 'musculosas';

export interface Product {
  id: string;
  type: ProductType;

  name: string;
  description: string;

  price: number; // precio que se usa para el carrito (transferencia / precio final)
  image: string; // imagen principal (para el carrito y previews)
  images: string[]; // galería para la card y detalles

  features: string[];

  // Para mostrar info extra en el modal (opcional)
  normalPrice?: number;
  transferPrice?: number;
  extraCustomText?: string;
}

/* =========================
   IMPORTS - BOTAS (jpg)
   Ajustá rutas si tus carpetas/nombres cambian
========================= */

// Card 1: p1-p2
import b_mod1_p1 from '@/assets/productos/botas/mod1/p1.jpg';
import b_mod1_p2 from '@/assets/productos/botas/mod1/p2.jpg';

// Card 2: v1-v2
import b_mod2_v1 from '@/assets/productos/botas/mod2/v1.jpg';
import b_mod2_v2 from '@/assets/productos/botas/mod2/v2.jpg';

// Card 3: n1-n2-n3-n4
import b_mod3_n1 from '@/assets/productos/botas/mod3/n1.jpg';
import b_mod3_n2 from '@/assets/productos/botas/mod3/n2.jpg';
import b_mod3_n3 from '@/assets/productos/botas/mod3/n3.jpg';
import b_mod3_n4 from '@/assets/productos/botas/mod3/n4.jpg';

// Card 4: m1
import b_mod4_m1 from '@/assets/productos/botas/mod4/m1.jpg';

// Card 5: r1
import b_mod5_r1 from '@/assets/productos/botas/mod5/r1.jpg';

// Card 6: b1
import b_mod6_b1 from '@/assets/productos/botas/mod6/b1.jpg';

// Card 7: r1 (mod7)
import b_mod7_r1 from '@/assets/productos/botas/mod7/r1.jpg';

// Card 8: ad1 (en la raíz de botas, según tu captura)
import b_ad1 from '@/assets/productos/botas/ad1.jpg';

// Card 9: bar
import b_bar from '@/assets/productos/botas/bar.jpg';

// Card 10: bn1
import b_bn1 from '@/assets/productos/botas/bn1.jpg';

// Card 11: na1
import b_na1 from '@/assets/productos/botas/na1.jpg';

// Card 12: nd1
import b_nd1 from '@/assets/productos/botas/nd1.jpg';

// Card 13: ng1
import b_ng1 from '@/assets/productos/botas/ng1.jpg';

/* =========================
   IMPORTS - MUSCULOSAS (jpg)
   Card antes de la 4: md-ma
========================= */
import m_md from '@/assets/productos/musculosas/md.jpg';
import m_ma from '@/assets/productos/musculosas/ma.jpg';

/* =========================
   IMPORTS - REMERAS (jpg)
   card antes de la 6: rbd-rba-rbf
   card antes de la 9: rnd-rna
========================= */
import r_rbd from '@/assets/productos/remeras/rbd.jpg';
import r_rba from '@/assets/productos/remeras/rba.jpg';
import r_rbf from '@/assets/productos/remeras/rbf.jpg';

import r_rnd from '@/assets/productos/remeras/rnd.jpg';
import r_rna from '@/assets/productos/remeras/rna.jpg';

/* =========================
   IMPORTS - TALLES (jpg)
   (Ajustá el nombre exacto si difiere)
========================= */
import size_botas from '@/assets/productos/talles/TALLES-BOTAS.jpg';
import size_remeras from '@/assets/productos/talles/TALLES-REMERAS.png';

export const sizeGuides = {
  botas: size_botas,
  remeras: size_remeras,
  musculosas: size_remeras, // musculosas usan la misma guía de A/B que remeras
};

const BOOT_NORMAL = 178200;
const BOOT_TRANSFER = 165700;

const BOOT_COMMON = {
  name: 'Bota de boxeo MB',
  description:
    'Nuestra bota de boxeo Meaurio Box está hecha con suela de caucho, cocida a mano y diseñada con los mejores materiales importados y nacionales.',
  features: [
    '20% descuento en 2do producto en cualquier compra.',
    `Precio Normal: $${BOOT_NORMAL.toLocaleString('es-AR')}`,
    `Transferencia: $${BOOT_TRANSFER.toLocaleString('es-AR')}`,
    'ARMÁ TU PERSONALIZADO por $40.000 más (Demora 20 días hábiles).',
  ],
  normalPrice: BOOT_NORMAL,
  transferPrice: BOOT_TRANSFER,
  extraCustomText: 'ARMÁ TU PERSONALIZADO por $40.000 más (Demora 20 días hábiles).',
};

export const products: Product[] = [
  // Card 1
  {
    id: '1',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod1_p1,
    images: [b_mod1_p1, b_mod1_p2],
  },

  // Card 2
  {
    id: '2',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod2_v1,
    images: [b_mod2_v1, b_mod2_v2],
  },

  // Card 3
  {
    id: '3',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod3_n1,
    images: [b_mod3_n1, b_mod3_n2, b_mod3_n3, b_mod3_n4],
  },

  // Card antes de la 4 (MUSCULOSAS) md-ma
  {
    id: '4',
    type: 'musculosas',
    name: 'Remera Basquet',
    description:
      'Nuestras remeras de Basquet traen todo el estilo para el boxeo y comodidad para los entrenamientos más exigentes.',
    price: 47880,
    image: m_md,
    images: [m_md, m_ma],
    features: [
      '20% descuento en 2do producto en cualquier compra.',
      'Precio: $47.880',
    ],
  },

  // Card 4 (bota) m1
  {
    id: '5',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod4_m1,
    images: [b_mod4_m1],
  },

  // Card 5 (bota) r1
  {
    id: '6',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod5_r1,
    images: [b_mod5_r1],
  },

  // Card antes de la 6 (REMERAS) rbd-rba-rbf
  {
    id: '7',
    type: 'remeras',
    name: 'Remera Algodón',
    description:
      'Nuestras remeras de algodón están diseñadas de un algodón peinado especial, que también usan otros deportes como el CrossFit.',
    price: 36300,
    image: r_rbd,
    images: [r_rbd, r_rba, r_rbf],
    features: [
      '20% descuento en 2do producto en cualquier compra.',
      'Precio: $36.300',
    ],
  },

  // Card 6 (bota) b1
  {
    id: '8',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod6_b1,
    images: [b_mod6_b1],
  },

  // Card 7 (bota) r1 (mod7)
  {
    id: '9',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_mod7_r1,
    images: [b_mod7_r1],
  },

  // Card 8 (bota) ad1
  {
    id: '10',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_ad1,
    images: [b_ad1],
  },

  // Card antes de la 9 (REMERAS) rnd-rna
  {
    id: '11',
    type: 'remeras',
    name: 'Remera Algodón',
    description:
      'Nuestras remeras de algodón están diseñadas de un algodón peinado especial, que también usan otros deportes como el CrossFit.',
    price: 36300,
    image: r_rnd,
    images: [r_rnd, r_rna],
    features: [
      '20% descuento en 2do producto en cualquier compra.',
      'Precio: $36.300',
    ],
  },

  // Card 9 (bota) bar
  {
    id: '12',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_bar,
    images: [b_bar],
  },

  // Card 10 (bota) bn1
  {
    id: '13',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_bn1,
    images: [b_bn1],
  },

  // Card 11 (bota) na1
  {
    id: '14',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_na1,
    images: [b_na1],
  },

  // Card 12 (bota) nd1
  {
    id: '15',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_nd1,
    images: [b_nd1],
  },

  // Card 13 (bota) ng1
  {
    id: '16',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    image: b_ng1,
    images: [b_ng1],
  },
];

export const siteConfig = {
  name: 'MB Meaurio',
  slogan: 'LAS MEJORES BOTAS CON LOS MEJORES',
  description: 'Indumentaria profesional de boxeo hecha por y para boxeadores.',
  founder: 'Bruno Meaurio',
  phone: '5491112345678',
};
