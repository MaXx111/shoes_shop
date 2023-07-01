import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './components/pages/main/mainPage'

function App() {

  return (
    <>
        <Routes>
          <Route path="shoes_shop/" element={<MainPage />}/>
        </Routes>
    </>
  )
}

export default App
