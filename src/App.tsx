import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './components/pages/mainPage'
import { CatalogPage } from './components/pages/catalogPage'
import { AboutPage } from './components/pages/aboutPage'
import { ContactsPage } from './components/pages/contacts'
import { NotFoundPage } from './components/pages/404Page'


function App() {

  return (
    <>
        <Routes>
          <Route path="shoes_shop/" element={<MainPage />}/>
          <Route path="shoes_shop/catalog" element={<CatalogPage />}/>
          <Route path="shoes_shop/about" element={<AboutPage />}/>
          <Route path="shoes_shop/contacts" element={<ContactsPage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App
