import productsByCategoryReducer, {
  ProductByCategoryState,
  cleanProductsByCategorySales,
} from "./getProductsByCategorySlice"

describe("get products by category reducer", () => {
  const initialState: ProductByCategoryState = {
    products: [],
    status: "idle",
  }

  it("should handle  initial state", () => {
    expect(productsByCategoryReducer(undefined, { type: "unknown" })).toEqual({
      products: [],
      status: "idle",
    })
  })

  it("should clear  state", () => {
    const actual = productsByCategoryReducer(
      initialState,
      cleanProductsByCategorySales(),
    )
    expect(actual).toEqual({
      products: [],
      status: "idle",
    })
  })
})
