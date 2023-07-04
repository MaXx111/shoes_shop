import { SizeItem } from "../../shared/UI/sizeItem"

interface SizesProps {
    sizes: {
        size: string,
        available: boolean
    }[]
}

export const Sizes: React.FC<SizesProps> = ({sizes}) => {

    console.log(sizes)

    return(
        <>
            {sizes && <p>Размеры в наличии: {sizes.map(item => item.available && <SizeItem key={item.size} size={item.size} />)}</p>}
        </>
    )
}