import { useAppSelector } from "../../app/hooks"
import { TopSalesItem } from "../../entities/topSalseItem/topSalesItem"


export const TopSalesList: React.FC = () => {

    const { items } = useAppSelector(state => state.TopSalseReducer)

    return(
        <>
            <div className="row">
                {items.map(item => <TopSalesItem key={item.id} product={item} />)}
            </div>
        </>
    )
}