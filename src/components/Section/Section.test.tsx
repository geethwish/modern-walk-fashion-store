import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import Section from "./Section"

describe("Section component test", () => {
  test("renders Section component", () => {
    render(
      <Provider store={store}>
        <Section>
          <h1>Test Title</h1>
        </Section>
      </Provider>,
    )

    expect(screen.getByText(/Test Title/i)).toBeInTheDocument()
  })
})
