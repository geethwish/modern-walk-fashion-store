import axios from "axios"
import { ProductCategoryType, ProductsFilter } from "./Products.types"

export const requestProducts = (data: ProductsFilter) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/products", { params: data })
      .then((response) => {
        resolve(response.data)
      })
      .catch((errors) => {
        reject(errors)
      })
  })
}

export const requestProductsByCategory = ({
  category,
  filters,
}: ProductCategoryType) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/products/category/${category}`, { params: filters ?? {} })
      .then((response) => {
        resolve(response.data)
      })
      .catch((errors) => {
        reject(errors)
      })
  })
}
