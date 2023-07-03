import { NavLink } from 'react-router-dom'


export const FooterNav: React.FC = () => {

    return(
        <>
            <section>
                <h5>Информация</h5>
                <ul className="nav flex-column">
                    <NavLink
                    to='/shoes_shop/about'
                    className={({ isActive }) => classForNavLink(isActive)}
                    >
                        О магазине
                    </NavLink>
                    <NavLink
                    to='/shoes_shop/catalog'
                    className={({ isActive }) => classForNavLink(isActive)}
                    >
                        Каталог
                    </NavLink>
                    <NavLink
                    to='/shoes_shop/contacts'
                    className={({ isActive }) => classForNavLink(isActive)}
                    >
                        Контакты
                    </NavLink>
                </ul>
            </section>
        </>
    )
}

function classForNavLink(isActive: boolean) {

    return isActive ? 'nav-item active nav-link' : "nav-item nav-link" ;
}