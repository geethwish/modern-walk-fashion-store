import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

import { requestProducts } from "./ProductsAPI"
import { Product, ProductsFilter } from "./Products.types"

export interface FlashSalesState {
  products: Product[] | []
  status: "idle" | "loading" | "success" | "failed"
}

const initialState: FlashSalesState = {
  products: [],
  status: "idle",
}

export const fetchFlashProducts = createAsyncThunk(
  "products/fetchFlashSales",
  async (data: ProductsFilter) => {
    const response = await requestProducts(data)
    return response
  },
)

export const flashProductsSlice = createSlice({
  name: "flashSales",
  initialState,
  reducers: {
    cleanFlashSales: (state) => {
      state.products = []
      state.status = "idle"
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchFlashProducts.fulfilled, (state, action) => {
        state.status = "success"

        // given design only shows woment's clothing and men's clothing because of that in here will filter products that related those mentioned categories
        const allProducts = action.payload as Product[]
        const filteredProducts = allProducts.filter((product: Product) => {
          return (
            product.category === `men's clothing` ||
            product.category === `women's clothing`
          )
        })

        state.products = filteredProducts
      })
      .addCase(fetchFlashProducts.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { cleanFlashSales } = flashProductsSlice.actions

export const flashProductsApiStatus = (state: RootState) =>
  state.flashProducts.status
export const flashProducts = (state: RootState) =>
  state.flashProducts.products as Product[] | []

export default flashProductsSlice.reducer
