type ProductRating = {
  rate: number
  count: number
}

type ProductCategories =
  | `electronics`
  | `jewelery`
  | `men's clothing`
  | `women's clothing`

export interface Product {
  category: ProductCategories
  description: string
  id: number
  image: string
  price: number
  rating: ProductRating
  title: string
}
export interface ProductCardProps {
  product: Product
}

export interface ProductsFilter {
  limit?: number
}
