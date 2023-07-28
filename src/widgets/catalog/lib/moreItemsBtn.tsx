import React from "react";

interface MoreItemsProps {
    moreBtnHandler: () => void
}

export const MoreItemsBtn: React.FC<MoreItemsProps> = ({moreBtnHandler}) => {

    return(
        <>
            <div className="text-center">
                <button className="btn btn-outline-primary" onClick={moreBtnHandler}>Загрузить ещё</button>
            </div>
        </>
    )
}