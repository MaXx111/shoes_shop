import { useState } from "react"

interface SizeItemProps {
    size: string
}

export const SizeItem: React.FC<SizeItemProps> = ({size}) => {

    const [toggle, setToggle] = useState(false)

    const clickHandler = () => {
        setToggle(!toggle)
    }

    return(
        <>
            <span className={`catalog-item-size ${!toggle && 'selected'}`} onClick={clickHandler}>{size}</span>
        </>
    )
}