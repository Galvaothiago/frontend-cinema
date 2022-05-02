import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header"

import { ContainerApp, Main } from "./globalStyle"
import { Home } from "./pages/home"
import { Movies } from "./pages/movies"

function App() {
  return (
    <ContainerApp>
      <Header />
      <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
      </Routes>
      </Main>
    </ContainerApp>
  )
}

export default App
