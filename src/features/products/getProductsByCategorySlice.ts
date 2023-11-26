import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

import { requestProductsByCategory } from "./ProductsAPI"
import { Product, ProductCategoryType } from "./Products.types"

export interface ProductByCategoryState {
  products: Product[] | []
  status: "idle" | "loading" | "success" | "failed"
}

const initialState: ProductByCategoryState = {
  products: [],
  status: "idle",
}

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (data: ProductCategoryType) => {
    const response = await requestProductsByCategory(data)
    return response
  },
)

export const productsByCategorySlice = createSlice({
  name: "productsByCategory",
  initialState,
  reducers: {
    cleanProductsByCategorySales: (state) => {
      state.products = []
      state.status = "idle"
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "success"
        state.products = action.payload as Product[]
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { cleanProductsByCategorySales } = productsByCategorySlice.actions

export const productByCategoryAPIStatus = (state: RootState) =>
  state.productByCategory.status
export const productByCategoryProducts = (state: RootState) =>
  state.productByCategory.products as Product[] | []

export default productsByCategorySlice.reducer
