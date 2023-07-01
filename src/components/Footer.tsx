import { NavLink } from "react-router-dom"

export const Footer: React.FC = () => {

    return(
        <>
            <footer className="container bg-light footer">
                <div className="row">
                    <div className="col">
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
                    </div>
                    <div className="col">
                        <section>
                            <h5>Принимаем к оплате:</h5>
                            <div className="footer-pay">
                                <div className="footer-pay-systems footer-pay-systems-paypal"></div>
                                <div className="footer-pay-systems footer-pay-systems-master-card"></div>
                                <div className="footer-pay-systems footer-pay-systems-visa"></div>
                                <div className="footer-pay-systems footer-pay-systems-yandex"></div>
                                <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
                                <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
                            </div>
                        </section>
                        <section>
                            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
                                Все права защищены.<br />Доставка по всей России!
                            </div>
                        </section>
                    </div>
                    <div className="col text-right">
                        <section className="footer-contacts">
                            <h5>Контакты:</h5>
                            <NavLink 
                            to="tel:+7-495-790-35-03"
                            className="footer-contacts-phone"
                            >
                                +7 495 79 03 5 03
                            </NavLink>
                            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
                            <NavLink 
                            to="mailto:office@bosanoga.ru"
                            className="footer-contacts-email"
                            >
                                office@bosanoga.ru
                            </NavLink>
                            <div className="footer-social-links">
                                <div className="footer-social-link footer-social-link-twitter"></div>
                                <div className="footer-social-link footer-social-link-vk"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </>
    )
}

function classForNavLink(isActive: boolean) {

    return isActive ? 'nav-item active nav-link' : "nav-item nav-link" ;
}