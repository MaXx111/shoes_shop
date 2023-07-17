import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { SizeItem } from "../../../../shared/UI/sizeItem"
import { ProductInfoSlice } from "../../model/slice"

export const SizesControl: React.FC = () => {

    const {product, selected, productCount} = useAppSelector(state => state.ProductInfoReducer)
    const dispatch = useAppDispatch()

    const onSizeBtnClick = (size: string) => {

        if (selected !== size) dispatch(ProductInfoSlice.actions.addSelected(size))
    }

    const decrement = () => {
        if(selected) dispatch(ProductInfoSlice.actions.decrement())
    }

    const increment = () => {
        if(selected) dispatch(ProductInfoSlice.actions.increment())
    }

    return(
        <>
            {product.sizes &&
                <div className="text-center">
                    <p>Размеры в наличии: 
                        {product.sizes.map(item => item.available && <SizeItem key={item.size} size={item.size} clickHandler={onSizeBtnClick} selected={selected!}/>)}
                    </p>
                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                        <button className="btn btn-secondary" onClick={decrement}>-</button>
                        <span className="btn btn-outline-primary">{productCount}</span>
                        <button className="btn btn-secondary" onClick={increment}>+</button>
                        </span>
                    </p>
                </div>
            }
        </>
    )
}