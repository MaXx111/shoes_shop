import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './components/pages/main/mainPage'
import { CatalogPage } from './components/pages/catalog/catalogPage'


function App() {

  return (
    <>
        <Routes>
          <Route path="shoes_shop/" element={<MainPage />}/>
          <Route path="shoes_shop/catalog.html" element={<CatalogPage />}/>
        </Routes>
    </>
  )
}

export default App
