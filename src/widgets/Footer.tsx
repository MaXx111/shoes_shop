import { FooterNav } from "../entities/footerNav/footerNav";
import { PaymentIcons } from "../shared/UI/paymentIcons";
import { Copyright } from "../shared/copyright";
import { FooterContacts } from "../entities/footerContacts/footerContacts";

export const Footer: React.FC = () => {

    return(
        <>
            <footer className="container bg-light footer">
                <div className="row">
                    <div className="col">
                        <FooterNav />
                    </div>
                    <div className="col">
                        <PaymentIcons />
                        <Copyright />
                    </div>
                    <div className="col text-right">
                        <FooterContacts />
                    </div>
                </div>
            </footer>
        </>
    )
}
