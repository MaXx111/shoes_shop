import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './components/pages/main/mainPage'
import { CatalogPage } from './components/pages/catalog/catalogPage'
import { AboutPage } from './components/pages/about/aboutPage'


function App() {

  return (
    <>
        <Routes>
          <Route path="shoes_shop/" element={<MainPage />}/>
          <Route path="shoes_shop/catalog.html" element={<CatalogPage />}/>
          <Route path="shoes_shop/about.html" element={<AboutPage />}/>
        </Routes>
    </>
  )
}

export default App
