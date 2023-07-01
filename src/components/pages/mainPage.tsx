import { Footer } from "../Footer"
import { Header } from "../Header"
import { Banner } from "../banner"
import { Catalog } from "../widgets/catalog"
import { TopSales } from "../widgets/topSales"


export const MainPage: React.FC = () => {

    return(
        <>
        <Header />
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner />
                    <TopSales />
                    <Catalog />
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}