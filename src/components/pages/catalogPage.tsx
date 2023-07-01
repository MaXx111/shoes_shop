import { Footer } from "../Footer"
import { Header } from "../Header"
import { Catalog } from "../widgets/catalog"


export const CatalogPage: React.FC = () => {

    return(
        <>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Catalog>
                            <form className="catalog-search-form form-inline">
                                <input className="form-control" placeholder="Поиск" />
                            </form>
                        </Catalog>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}