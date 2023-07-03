import {
    createBrowserRouter
} from 'react-router-dom'
import { MainPage } from '../pages/main/mainPage'
import { CatalogPage } from '../pages/catalog/catalogPage'
import { AboutPage } from '../pages/about/aboutPage'
import { CartPage } from '../pages/cart/cartPage'
import { NotFoundPage } from '../pages/404/404Page'
import { ContactsPage } from '../pages/contacts/contacts'

export const router = createBrowserRouter([
    {
        path: 'shoes_shop/',
        element: <MainPage />,
    },
    {
        path: 'shoes_shop/catalog',
        element: <CatalogPage />
    },
    {
        path: 'shoes_shop/about',
        element: <AboutPage />
    },
    {
        path: 'shoes_shop/contacts',
        element: <ContactsPage />
    },
    {
        path: 'shoes_shop/cart',
        element: <CartPage />
    },
    {
        path: 'shoes_shop/*',
        element: <NotFoundPage />
    }
]);