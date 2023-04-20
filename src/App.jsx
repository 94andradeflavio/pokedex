import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites"
import Footer from "./components/Footer"

import * as S from "./assets/css/globalStyles"

function App() {

  return (
    <S.App>
      <Header />
      <S.Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </S.Container>
      <Footer />
    </S.App>
  )
}

export default App
