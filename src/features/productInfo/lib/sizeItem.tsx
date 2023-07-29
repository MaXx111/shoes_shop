import { productSize } from "../../../shared/model/brandtypes"

interface SizeItemProps {
    size: productSize,
    selected: string,
    clickHandler: (size: productSize) => void
}

export const SizeItem = ({size, selected, clickHandler}: SizeItemProps) => {

    return(
        <>
            <span className={size == selected ? 'catalog-item-size selected' : 'catalog-item-size'} onClick={() => clickHandler(size)}>{size}</span>
        </>
    )
}