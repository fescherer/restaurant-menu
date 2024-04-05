export type TSection = {
  id: string
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
