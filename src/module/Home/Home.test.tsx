import { render, screen } from "@testing-library/react"
import TestComponentWrapper from "../../components/TestComponentWrapper/TestComponentWrapper"
import Home from "./Home"

describe("Home page testing", () => {
  test("renders flash sales", async () => {
    render(
      <TestComponentWrapper>
        <Home />
      </TestComponentWrapper>,
    )
    const cards = await screen.findAllByText(/no products/i)
    expect(cards).toHaveLength(1)
  })
})
