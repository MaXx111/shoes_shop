interface MoreItemsProps {
    moreBtnHandler: () => void
}

export const MoreItemsBtn = ({moreBtnHandler}: MoreItemsProps) => {

    return(
        <>
            <div className="text-center">
                <button className="btn btn-outline-primary" onClick={moreBtnHandler}>Загрузить ещё</button>
            </div>
        </>
    )
}