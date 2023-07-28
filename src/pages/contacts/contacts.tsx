import { NavLink } from "react-router-dom"
import { PatternPage } from "../patternPage"


export const ContactsPage = () => {

    return(
        <>
            <PatternPage bannerImg='./banner.jpg' headerImg='./header-logo.png'>  
                <section className="top-sales">
                    <h2 className="text-center">Контакты</h2>
                    <p>Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д. 17, бизнес-центр W Plaza.</p>
                    <h5 className="text-center">Координаты для связи:</h5>
                    <p>Телефон: <NavLink to="tel:+7-495-790-35-03">+7 495 79 03 5 03</NavLink> (ежедневно: с 09-00 до 21-00)</p>
                    <p>Email: <NavLink to="mailto:office@bosanoga.ru">office@bosanoga.ru</NavLink></p>
                </section>
            </PatternPage>
        </>
    )
}