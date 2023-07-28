import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {

    return(
        <>
            <ul className="navbar-nav mr-auto">
                <NavLink 
                  to="/shoes_shop/"
                  className={({ isActive }) => classForNavLink(isActive)}
                >
                    Главная
                </NavLink>
                <NavLink 
                  to="/shoes_shop/catalog"
                  className={({ isActive }) => classForNavLink(isActive)}
                >
                    Каталог
                </NavLink>
                <NavLink 
                  to="/shoes_shop/about"
                  className={({ isActive }) => classForNavLink(isActive)}
                >
                    О магазине
                </NavLink>
                <NavLink 
                  to="/shoes_shop/contacts"
                  className={({ isActive }) => classForNavLink(isActive)}
                >
                    Контакты
                </NavLink>
            </ul>
        </>
    )
}

function classForNavLink(isActive: boolean) {

    return isActive ? 'nav-item active nav-link' : "nav-item nav-link" ;
}