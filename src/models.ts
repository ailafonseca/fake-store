export type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
  quantity: number
  rating: { rate: number; count: number }
}
export type Purchase = {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  rating: { rate: number; count: number }
}
