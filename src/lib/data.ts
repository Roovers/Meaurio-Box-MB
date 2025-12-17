export type ProductType = 'botas' | 'remeras' | 'musculosas'
export type VelcroOption = 1 | 2

export interface ProductColorVariant {
  id: string
  label: string
  image: string
  images: string[]
  instagramUrl: string // Se añade de nuevo aquí por consistencia con los datos
}

export interface Product {
  id: string
  type: ProductType
  name: string
  description: string
  price: number
  image: string
  images: string[]
  features: string[]
  variants: ProductColorVariant[]
  sizeOptions: string[]
  velcroOptions?: VelcroOption[]
  normalPrice?: number
  transferPrice?: number
  extraCustomText?: string
}

import b_mod1_p1 from '@/assets/productos/botas/mod1/p1.jpg'
import b_mod1_p2 from '@/assets/productos/botas/mod1/p2.jpg'
import b_mod2_v1 from '@/assets/productos/botas/mod2/v1.jpg'
import b_mod2_v2 from '@/assets/productos/botas/mod2/v2.jpg'
import b_mod3_n1 from '@/assets/productos/botas/mod3/n1.jpg'
import b_mod3_n2 from '@/assets/productos/botas/mod3/n2.jpg'
import b_mod3_n3 from '@/assets/productos/botas/mod3/n3.jpg'
import b_mod3_n4 from '@/assets/productos/botas/mod3/n4.jpg'
import b_mod4_m1 from '@/assets/productos/botas/mod4/m1.jpg'
import b_mod5_r1 from '@/assets/productos/botas/mod5/r1.jpg'
import b_mod6_b1 from '@/assets/productos/botas/mod6/b1.jpg'
import b_mod7_r1 from '@/assets/productos/botas/mod7/r1.jpg'
import b_ad1 from '@/assets/productos/botas/ad1.jpg'
import b_bar from '@/assets/productos/botas/bar.jpg'
import b_bn1 from '@/assets/productos/botas/bn1.jpg'
import b_na1 from '@/assets/productos/botas/na1.jpg'
import b_nd1 from '@/assets/productos/botas/nd1.jpg'
import b_ng1 from '@/assets/productos/botas/ng1.jpg'
import m_md from '@/assets/productos/musculosas/md.jpg'
import m_ma from '@/assets/productos/musculosas/ma.jpg'
import r_rbd from '@/assets/productos/remeras/rbd.jpg'
import r_rba from '@/assets/productos/remeras/rba.jpg'
import r_rbf from '@/assets/productos/remeras/rbf.jpg'
import r_rnd from '@/assets/productos/remeras/rnd.jpg'
import r_rna from '@/assets/productos/remeras/rna.jpg'
import size_botas from '@/assets/productos/talles/TALLES-BOTAS.jpg'
import size_remeras from '@/assets/productos/talles/TALLES-REMERAS.png'

export const sizeGuides = {
  botas: size_botas,
  remeras: size_remeras,
  musculosas: size_remeras,
}

export const BOOT_SIZES = ['38', '39', '40', '41', '42', '43', '44', '45']
export const CLOTHING_SIZES = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
export const BOOT_VELCRO_OPTIONS: VelcroOption[] = [1, 2]

const BOOT_NORMAL = 178200
const BOOT_TRANSFER = 165700
const CLOTHING_PRICE = 36300
const BASKET_PRICE = 47880

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
  extraCustomText:
    'ARMÁ TU PERSONALIZADO por $40.000 más (Demora 20 días hábiles).',
}

const CLOTHING_COMMON = {
  description:
    'Nuestras remeras de algodón están diseñadas de un algodón peinado especial, que también usan otros deportes como el CrossFit.',
  features: [
    '20% descuento en 2do producto en cualquier compra.',
    `Precio: $${CLOTHING_PRICE.toLocaleString('es-AR')}`,
  ],
  sizeOptions: CLOTHING_SIZES,
}

export const products: Product[] = [
  {
    id: '1',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'blanca-purpura',
        label: 'Blanca con detalles púrpura',
        image: b_mod1_p1,
        images: [b_mod1_p1],
        instagramUrl: 'https://www.instagram.com/p/C_3oUw8P1XV/',
      },
      {
        id: 'negra-purpura',
        label: 'Negra con detalles púrpura',
        image: b_mod1_p2,
        images: [b_mod1_p2],
        instagramUrl: 'https://www.instagram.com/p/C41XRtHr4s_/',
      },
    ],
    image: b_mod1_p1,
    images: [b_mod1_p1, b_mod1_p2],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '2',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'negra-verde',
        label: 'Negra con detalles verdes',
        image: b_mod2_v1,
        images: [b_mod2_v1, b_mod2_v2],
        instagramUrl: 'https://www.instagram.com/p/C_QudF_vFxc/',
      },
    ],
    image: b_mod2_v1,
    images: [b_mod2_v1, b_mod2_v2],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '3',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'negra',
        label: 'Negra',
        image: b_mod3_n1,
        images: [b_mod3_n1, b_mod3_n2, b_mod3_n3, b_mod3_n4],
        instagramUrl: 'https://www.instagram.com/p/DCIM3p9hK9t/',
      },
    ],
    image: b_mod3_n1,
    images: [b_mod3_n1, b_mod3_n2, b_mod3_n3, b_mod3_n4],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '4',
    type: 'musculosas',
    name: 'Musculosa Basquet', // Ajustado a "Musculosa" para el tipo 'musculosas'
    description:
      'Nuestras musculosas de Basquet traen todo el estilo para el boxeo y comodidad para los entrenamientos más exigentes.', // Ajustado a "musculosas"
    price: BASKET_PRICE,
    variants: [
      {
        id: 'negra',
        label: 'Negra',
        image: m_md,
        images: [m_md, m_ma],
        instagramUrl: 'https://www.instagram.com/p/DR8PPf1Dwek/',
      },
    ],
    image: m_md,
    images: [m_md, m_ma],
    features: [
      '20% descuento en 2do producto en cualquier compra.',
      `Precio: $${BASKET_PRICE.toLocaleString('es-AR')}`,
    ],
    sizeOptions: CLOTHING_SIZES,
  },

  {
    id: '5',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'blanca-naranja',
        label: 'Blanca con detalles naranjas',
        image: b_mod4_m1,
        images: [b_mod4_m1],
        instagramUrl: 'https://www.instagram.com/p/DD4uFvGD9v_/', // URL de ejemplo
      },
    ],
    image: b_mod4_m1,
    images: [b_mod4_m1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '6',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'negra-rosa',
        label: 'Negra con detalles rosas',
        image: b_mod5_r1,
        images: [b_mod5_r1],
        instagramUrl: 'https://www.instagram.com/p/C_m_5Nvv1b1/', // URL de ejemplo
      },
    ],
    image: b_mod5_r1,
    images: [b_mod5_r1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '7',
    type: 'remeras',
    name: 'Remera Algodón MB',
    price: CLOTHING_PRICE,
    ...CLOTHING_COMMON,
    variants: [
      {
        id: 'blanca',
        label: 'Blanca',
        image: r_rbd,
        images: [r_rbd, r_rba, r_rbf],
        instagramUrl: 'https://www.instagram.com/p/DEmJ9c3g_vP/', // URL de ejemplo
      },
    ],
    image: r_rbd,
    images: [r_rbd, r_rba, r_rbf],
  },

  {
    id: '8',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'blanca-plateada',
        label: 'Blanca con detalles plateados',
        image: b_mod6_b1,
        images: [b_mod6_b1],
        instagramUrl: 'https://www.instagram.com/p/DGlx6XyD9lD/', // URL de ejemplo
      },
    ],
    image: b_mod6_b1,
    images: [b_mod6_b1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '9',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'roja-negra',
        label: 'Roja con detalles negros',
        image: b_mod7_r1,
        images: [b_mod7_r1],
        instagramUrl: 'https://www.instagram.com/p/C_q_1_rP9xT/', // URL de ejemplo
      },
    ],
    image: b_mod7_r1,
    images: [b_mod7_r1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '10',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'azul-dorado',
        label: 'Azul oscuro con detalles dorados',
        image: b_ad1,
        images: [b_ad1],
        instagramUrl: 'https://www.instagram.com/p/C-0rM9vv1xV/', // URL de ejemplo
      },
    ],
    image: b_ad1,
    images: [b_ad1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '11',
    type: 'remeras',
    name: 'Remera Algodón MB',
    price: CLOTHING_PRICE,
    ...CLOTHING_COMMON,
    variants: [
      {
        id: 'negra',
        label: 'Negra',
        image: r_rnd,
        images: [r_rnd, r_rna],
        instagramUrl: 'https://www.instagram.com/p/C-4rM9pv1xV/', // URL de ejemplo
      },
    ],
    image: r_rnd,
    images: [r_rnd, r_rna],
  },

  {
    id: '12',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'blanca-roja-azul',
        label: 'Blanca con detalles rojos y azules',
        image: b_bar,
        images: [b_bar],
        instagramUrl: 'https://www.instagram.com/p/DGs_9c3g_vP/', // URL de ejemplo
      },
    ],
    image: b_bar,
    images: [b_bar],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '13',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'blanca-negra',
        label: 'Blanca con detalles negros',
        image: b_bn1,
        images: [b_bn1],
        instagramUrl: 'https://www.instagram.com/p/DGwz8Q_vFxc/', // URL de ejemplo
      },
    ],
    image: b_bn1,
    images: [b_bn1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '14',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'negra-azul',
        label: 'Negra con detalles azules',
        image: b_na1,
        images: [b_na1],
        instagramUrl: 'https://www.instagram.com/p/DHw28Q_vFxc/', // URL de ejemplo
      },
    ],
    image: b_na1,
    images: [b_na1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '15',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'negra-dorada',
        label: 'Negra con detalles dorados',
        image: b_nd1,
        images: [b_nd1],
        instagramUrl: 'https://www.instagram.com/p/DIw28Q_vFxc/', // URL de ejemplo
      },
    ],
    image: b_nd1,
    images: [b_nd1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },

  {
    id: '16',
    type: 'botas',
    ...BOOT_COMMON,
    price: BOOT_TRANSFER,
    variants: [
      {
        id: 'negra-plateada',
        label: 'Negra con detalles plateados',
        image: b_ng1,
        images: [b_ng1],
        instagramUrl: 'https://www.instagram.com/p/DJw28Q_vFxc/', // URL de ejemplo
      },
    ],
    image: b_ng1,
    images: [b_ng1],
    sizeOptions: BOOT_SIZES,
    velcroOptions: BOOT_VELCRO_OPTIONS,
  },
]

export const siteConfig = {
  name: 'MB Meaurio',
  slogan: 'LAS MEJORES BOTAS CON LOS MEJORES',
  description: 'Indumentaria profesional de boxeo hecha por y para boxeadores.',
  founder: 'Bruno Meaurio',
  phone: '5491133350790',
}