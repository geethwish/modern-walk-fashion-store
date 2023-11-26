import React, { FC } from "react"
import { store } from "../../app/store"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

interface TestComponentWrapperProps {
  children: JSX.Element[] | JSX.Element
}
const TestComponentWrapper: FC<TestComponentWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

export default TestComponentWrapper
