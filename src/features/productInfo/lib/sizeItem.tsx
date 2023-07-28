
interface SizeItemProps {
    size: string,
    selected: string,
    clickHandler: (size: string) => void
}

export const SizeItem: React.FC<SizeItemProps> = ({size, selected, clickHandler}) => {

    return(
        <>
            <span className={size == selected ? 'catalog-item-size selected' : 'catalog-item-size'} onClick={() => clickHandler(size)}>{size}</span>
        </>
    )
}