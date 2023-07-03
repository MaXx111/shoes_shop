import { Footer } from "../widgets/Footer"
import { Header } from "../widgets/Header"
import { Banner } from "../shared/banner"
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