import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"

test("renders app component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  expect(screen.getByText(/Modern Walk/i)).toBeInTheDocument()
})
