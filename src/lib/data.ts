export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'MB Elite Pro - Black/Gold',
    price: 120000,
    description: 'La bota definitiva para competición. Ligereza extrema y soporte de tobillo superior.',
    image: 'https://placehold.co/600x600/1a1a1a/FFF?text=MB+Elite+Pro',
    features: ['Suela antideslizante', 'Horma adaptable', 'Peso pluma'],
  },
  {
    id: '2',
    name: 'MB Stealth - Midnight',
    price: 115000,
    description: 'Diseño totalmente negro para el boxeador que busca discreción y velocidad.',
    image: 'https://placehold.co/600x600/000000/333?text=MB+Stealth',
    features: ['Malla transpirable', 'Refuerzo lateral', 'Amortiguación reactiva'],
  },
  {
    id: '3',
    name: 'MB Classic - Red/White',
    price: 110000,
    description: 'El estilo clásico renovado con tecnología moderna. Comodidad para entrenamientos largos.',
    image: 'https://placehold.co/600x600/8b0000/FFF?text=MB+Classic',
    features: ['Durabilidad extra', 'Soporte de arco', 'Diseño retro'],
  },
  {
    id: '4',
    name: 'MB Speed - White/Gold',
    price: 125000,
    description: 'Diseñadas para el juego de pies rápido. Siente el ring como nunca antes.',
    image: 'https://placehold.co/600x600/f0f0f0/000?text=MB+Speed',
    features: ['Tracción multidireccional', 'Perfil bajo', 'Ajuste tipo calcetín'],
  },
];

export const siteConfig = {
  name: 'MB Meaurio',
  slogan: 'LAS MEJORES BOTAS CON LOS MEJORES',
  description: 'Indumentaria profesional de boxeo hecha por y para boxeadores.',
  founder: 'Bruno Meaurio',
  phone: '5491112345678', // Example phone for WhatsApp
};