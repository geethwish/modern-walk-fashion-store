import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import flashProductsReducer from "../features/products/flashSaleSlice"
import productsByCategoryReducer from "../features/products/getProductsByCategorySlice"

export const store = configureStore({
  reducer: {
    flashProducts: flashProductsReducer,
    productByCategory: productsByCategoryReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
