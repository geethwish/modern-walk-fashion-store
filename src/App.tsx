import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Suspense, lazy } from "react"
import { axiosInterceptor } from "./services/axiosInterceptor"

const Home = lazy(() => import("./module/Home/Home"))

function App() {
  axiosInterceptor()
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">header goes here</header>
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
