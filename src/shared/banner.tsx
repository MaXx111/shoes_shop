interface BannerProps {
    imgLink: string
}


export const Banner = ({imgLink}: BannerProps) => {

    return(
        <>
            <div className="banner">
                <img src={imgLink} className="img-fluid" alt="К весне готовы!" />
                <h2 className="banner-header">К весне готовы!</h2>
            </div>
        </>
    )
}