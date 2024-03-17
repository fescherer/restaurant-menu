import { TSection } from '@/types/Product'

export const PRODUCTS_DATA: TSection[] = [
  {
    section: 'Bebidas',
    products: [
      {
        id: 1,
        name: 'Coca cola',
        price: 800,
        description: 'Refrigerante lata',
        image: '',
      },
      {
        id: 2,
        name: 'Água',
        price: 300,
        description: 'Garrafa de 600ml',
        image: '',
      },
      {
        id: 3,
        name: 'Coco',
        price: 900,
        description: 'Agua de coco natual',
        image: '',
      },
    ],
  },
  {
    section: 'Doces',
    products: [],
  },
  {
    section: 'Salgados',
    products: [
      {
        id: 1,
        name: 'coxinha',
        price: 900,
        description: 'Massa de mandioca com frango',
        image: '',
      },
    ],
  },
  {
    section: 'Outros',
    products: [],
  },
]
