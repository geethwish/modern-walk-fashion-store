import axios from "axios"
import { ProductsFilter } from "./Products.types"

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
