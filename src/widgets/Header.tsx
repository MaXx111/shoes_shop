import { NavLink } from "react-router-dom"
import { HeaderNav } from "../entities/headerNav/headerNav"
import { HeaderControlsPics } from "../features/headerControlsPics/headerControlsPics"

interface HeaderProps {
    imgLink: string
}

export const Header: React.FC<HeaderProps> = ({imgLink}) => {


    return(
        <>
            <header className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <NavLink className="navbar-brand" to="/shoes_shop/">
                                <img src={imgLink} alt="Bosa Noga" />
                            </NavLink>
                            <div className="collapse navbar-collapse" id="navbarMain">
                                <HeaderNav />
                                <HeaderControlsPics />
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
