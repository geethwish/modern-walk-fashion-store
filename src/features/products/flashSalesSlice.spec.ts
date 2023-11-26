import flashSalesReducer, {
  FlashSalesState,
  cleanFlashSales,
} from "./flashSaleSlice"

describe("flash sales reducer", () => {
  const initialState: FlashSalesState = {
    products: [],
    status: "idle",
  }

  it("should handle  initial state", () => {
    expect(flashSalesReducer(undefined, { type: "unknown" })).toEqual({
      products: [],
      status: "idle",
    })
  })

  it("should clear  state", () => {
    const actual = flashSalesReducer(initialState, cleanFlashSales())
    expect(actual).toEqual({
      products: [],
      status: "idle",
    })
  })
})
