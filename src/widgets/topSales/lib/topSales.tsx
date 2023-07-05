import { useEffect } from "react"
import { TopSalseLoader } from "../../../entities/loaders/topSalesLoader"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchTopSalse } from "../api/topSalesApi"
import { TopSalesList } from "./topSalesList/topSalesList"


export const TopSales: React.FC = () => {

    const {loading, error} = useAppSelector(state => state.TopSalseReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopSalse());
    },[])

    return (
        <>
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                {loading && <TopSalseLoader />}
                {!loading && error && <p>{error}</p>}
                {!loading && !error && <TopSalesList />
                }
            </section>
        </>
    )
}