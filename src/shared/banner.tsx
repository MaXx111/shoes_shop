interface BannerProps {
    imgLink: string
}


export const Banner: React.FC<BannerProps> = ({imgLink}) => {

    return(
        <>
            <div className="banner">
                <img src={imgLink} className="img-fluid" alt="К весне готовы!" />
                <h2 className="banner-header">К весне готовы!</h2>
            </div>
        </>
    )
}