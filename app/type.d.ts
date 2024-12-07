export type ProductCardProps = {
  id: string
  title: string
  description: string
  category: string
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
}
