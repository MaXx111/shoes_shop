import { NavLink } from "react-router-dom"
import { HeaderForm } from "./headerForm"


export const Header: React.FC = () => {

    return(
        <>
            <header className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <NavLink className="navbar-brand" to="/">
                                <img src="/header-logo.png" alt="Bosa Noga" />
                            </NavLink>
                            <div className="collapse navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <NavLink 
                                      to="/shoes_shop/"
                                      className={({ isActive }) => classForNavLink(isActive)}
                                    >
                                        Главная
                                    </NavLink>
                                    <NavLink 
                                      to="/shoes_shop/catalog.html"
                                      className={({ isActive }) => classForNavLink(isActive)}
                                    >
                                        Каталог
                                    </NavLink>
                                    <NavLink 
                                      to="/shoes_shop/about.html"
                                      className={({ isActive }) => classForNavLink(isActive)}
                                    >
                                        О магазине
                                    </NavLink>
                                    <NavLink 
                                      to="/shoes_shop/contacts.html"
                                      className={({ isActive }) => classForNavLink(isActive)}
                                    >
                                        Контакты
                                    </NavLink>
                                </ul>
                                <div>
                                    <div className="header-controls-pics">
                                        <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                        {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                        <div className="header-controls-pic header-controls-cart">
                                            <div className="header-controls-cart-full">1</div>
                                            <div className="header-controls-cart-menu"></div>
                                        </div>
                                    </div>
                                    <HeaderForm />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

function classForNavLink(isActive: boolean) {

    return isActive ? 'nav-item active nav-link' : "nav-item nav-link" ;
}