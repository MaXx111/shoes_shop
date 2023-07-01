import { Banner } from "../../banner"
import { Catalog } from "../../widgets/catalog"
import { TopSales } from "../../widgets/topSales"

export const MainConteiner: React.FC = () => {

    return (
        <>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <TopSales />
                        <Catalog />
                    </div>
                </div>
            </main>
        </>
    )
}