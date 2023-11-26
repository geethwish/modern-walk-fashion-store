import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import { axiosInterceptor } from "./services/axiosInterceptor"
import { AppBar, Container } from "@mui/material"
import PageLoader from "./components/Loader/PageLoader"

const Home = lazy(() => import("./module/Home/Home"))
const Category = lazy(() => import("./module/Category/Category"))
const PageNotFound = lazy(() => import("./module/PageNotFound/PageNotFound"))

function App() {
  axiosInterceptor()
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <AppBar component="nav" className="header-bar title-font">
            Modern Walk
          </AppBar>
        </header>
        <main className="main-body">
          <Container maxWidth="xl">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/mens-clothing"
                element={
                  <Suspense fallback={<>loading</>}>
                    <Category />
                  </Suspense>
                }
              />
              <Route
                path="/womens-clothing"
                element={
                  <Suspense fallback={<>loading</>}>
                    <Category />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<>loading</>}>
                    <PageNotFound />
                  </Suspense>
                }
              />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
