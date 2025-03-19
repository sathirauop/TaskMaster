import { Outlet, useNavigation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Loader from "../Loader"

function PublicAppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="layout">
            {isLoading && <Loader />}

            <Header />
            
            <main className="main-content">
                <Outlet />
            </main>

            <Footer/>
            
        </div>
    )
}

export default PublicAppLayout
