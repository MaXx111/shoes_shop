import { useAppSelector } from "../../../../app/hooks"
import ProductItem from "../../../../entities/productItem/productItem"


export const TopSalesList: React.FC = () => {

    const { items } = useAppSelector(state => state.TopSalseReducer)

    return(
        <>
            <div className="row">
                {items.map(item => <ProductItem key={item.id} product={item} classNameItem={'card'}/>)}
            </div>
        </>
    )
}