import {
    createBrowserRouter
} from 'react-router-dom'
import { MainPage } from '../pages/mainPage'
import { CatalogPage } from '../pages/catalogPage'
import { AboutPage } from '../pages/aboutPage'
import { CartPage } from '../pages/cart/cartPage'
import { NotFoundPage } from '../pages/404Page'

export const appRouter = () =>  
    createBrowserRouter([
        {
            path: 'shoes_shop/',
            element: <MainPage />,
            children: [
                {
                    path: 'catalog',
                    element: <CatalogPage />
                },
                {
                    path: 'about',
                    element: <AboutPage />
                },
                {
                    path: 'contacts',
                    element: <CatalogPage />
                },
                {
                    path: 'cart',
                    element: <CartPage />
                },
                {
                    path: '*',
                    element: <NotFoundPage />
                }
            ]
        }
    ]);