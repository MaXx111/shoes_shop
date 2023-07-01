import { Banner } from "./banner"


export const MainConteiner: React.FC = () => {

    return (
        <>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        
                    </div>
                </div>
            </main>
        </>
    )
}