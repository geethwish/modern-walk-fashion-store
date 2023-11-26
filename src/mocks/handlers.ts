import { HttpResponse, http } from "msw"
import { fakeProduct } from "./data"

export const handlers = [
  http.get("/products", async ({ request }) => {
    return HttpResponse.json(fakeProduct)
  }),
]
