import ReactDOM from 'react-dom/client'
import { router } from './appRouter'
import { RouterProvider } from 'react-router-dom'
import '../App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
)