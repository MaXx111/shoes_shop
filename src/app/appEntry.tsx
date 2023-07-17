import ReactDOM from 'react-dom/client'
import { router } from './appRouter'
import { RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import './App.css'
import { setupStore } from './appStore'

const appStore = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ReduxProvider store={appStore}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
    </ReduxProvider>
)