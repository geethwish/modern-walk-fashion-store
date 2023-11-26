import { render, screen } from "@testing-library/react"
import ProductCard from "./ProductCard"
import TestComponentWrapper from "../../components/TestComponentWrapper/TestComponentWrapper"

describe("Product  card test", () => {
  const product = {
    name: "Mens Cotton Jacket",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
    price: "55.99",
    imageUrl: "",
    category: "men",
  }
  test("renders Product card component with props", () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product} />
      </TestComponentWrapper>,
    )

    expect(screen.getByText(/Mens Cotton Jacket/i)).toBeInTheDocument()
  })
})
