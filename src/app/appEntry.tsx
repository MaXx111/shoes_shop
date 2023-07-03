import ReactDOM from 'react-dom/client'
import { appRouter } from './appRouter'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={appRouter()} />
)