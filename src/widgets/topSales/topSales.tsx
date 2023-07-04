import { useEffect } from "react"
import { TopSalseLoader } from "../../entities/loaders/topSalesLoader"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchTopSalse } from "./api/topSalesApi"


export const TopSales: React.FC = () => {

    const {loading, items, error} = useAppSelector(state => state.TopSalseReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopSalse());
    },[])

    console.log(items)

    return (
        <>
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                {loading && <TopSalseLoader />}
                {!loading && error && <p>{error}</p>}
                {!loading && !error &&
                <p>ujnj</p>
                }
            </section>
        </>
    )
}