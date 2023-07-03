interface CartMenuNumberProps {
    count: number
}

export const CartMenuNumber: React.FC<CartMenuNumberProps> = ({count}) => {

    return(
        <>
            <div className="header-controls-cart-full">{count}</div>
        </>
    )
}