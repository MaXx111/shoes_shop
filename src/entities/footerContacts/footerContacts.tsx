import { NavLink } from 'react-router-dom'
import { TwitterIcon } from '../../shared/UI/twitterIcon'
import { VKIcon } from '../../shared/UI/VKIcon'

export const FooterContacts: React.FC = () => {

    return(
        <>
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
                <TwitterIcon />
                <VKIcon />
            </div>
        </section>
        </>
    )
}