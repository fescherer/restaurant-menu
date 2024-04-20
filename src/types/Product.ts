export type TSection = {
  id: 'new' | 'foods' | 'drinks' | 'dessert'
  section: string
  products: TProduct[]
}

export type TProduct = {
  id: string
  name: string
  description: string
  price: number
  color: string
  image: string
}
