import { render, screen } from "@testing-library/react"
import CategoryCard from "./CategoryCard"
import TestComponentWrapper from "../TestComponentWrapper/TestComponentWrapper"

describe("Category card test", () => {
  test("renders category component with props", () => {
    render(
      <TestComponentWrapper>
        <CategoryCard title={"card 1"} variant={"primary"} />
      </TestComponentWrapper>,
    )

    expect(screen.getByText(/card 1/i)).toBeInTheDocument()
  })

  test("renders category component with path available", () => {
    render(
      <TestComponentWrapper>
        <CategoryCard title={"card 1"} variant={"primary"} path="/card1" />
      </TestComponentWrapper>,
    )

    expect(screen.getByText(/card 1/i)).toBeInTheDocument()
  })
})
