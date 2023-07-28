import { FooterNav } from "./lib/footerNav";
import { PaymentIcons } from "./lib/paymentIcons";
import { Copyright } from "./lib/copyright";
import { FooterContacts } from "./lib/footerContacts";

export const Footer = () => {

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
