import { FormSearch } from "../../features/formSearch/formSearch"
import { Banner } from "../../shared/banner"
import { Footer } from "../../widgets/Footer"
import { Header } from "../../widgets/Header"
import { Catalog } from "../../widgets/catalog"


export const CatalogPage: React.FC = () => {

    return(
        <>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <Catalog>
                            <FormSearch />
                        </Catalog>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}