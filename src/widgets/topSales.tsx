import { TopSalseLoader } from "../entities/loaders/topSalesLoader"


export const TopSales: React.FC = () => {

    return (
        <>
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <TopSalseLoader />
            </section>
        </>
    )
}