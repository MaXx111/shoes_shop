interface AddToCartBtnProps {
    clickHandler: () => void
}

export const AddToCartBtn: React.FC<AddToCartBtnProps> = ({clickHandler}) => {

    return(
        <>
            <button className="btn btn-danger btn-block btn-lg" onClick={clickHandler}>В корзину</button>
        </>
    )
}