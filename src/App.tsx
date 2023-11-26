import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import { axiosInterceptor } from "./services/axiosInterceptor"
import { AppBar } from "@mui/material"

const Home = lazy(() => import("./module/Home/Home"))

function App() {
  axiosInterceptor()
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <AppBar component="nav" className="header-bar">
            Modern Walk
          </AppBar>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<>loading</>}>
                  <Home />
                </Suspense>
              }
            />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </main>
        <footer>footer goes here</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
