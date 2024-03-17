export type TSection = {
  section: string
  products: TProduct[]
}

export type TProduct = {
  id: number
  name: string
  description: string
  price: number
  image: string
}
