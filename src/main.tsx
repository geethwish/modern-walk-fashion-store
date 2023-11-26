import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "@mui/material/styles"

import "./index.scss"
import "react-toastify/dist/ReactToastify.css"
import { theme } from "./utils/themeSettings"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
