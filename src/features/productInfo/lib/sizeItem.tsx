
interface SizeItemProps {
    size: string,
    selected: string,
    clickHandler: (size: string) => void
}

export const SizeItem = ({size, selected, clickHandler}: SizeItemProps) => {

    return(
        <>
            <span className={size == selected ? 'catalog-item-size selected' : 'catalog-item-size'} onClick={() => clickHandler(size)}>{size}</span>
        </>
    )
}