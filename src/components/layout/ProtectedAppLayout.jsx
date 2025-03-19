import { Outlet, useNavigation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Loader from "../Loader"
import SideBar from "../SideBar"

function ProtectedAppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    let sidebarCollapsed =  false;

    
    return (
        <div>
           <div className={`app-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            {isLoading && <Loader />}

                <header className="app-header"><Header/></header>
                <aside className="app-sidebar"><SideBar/></aside>
                <main className="main-content app-main">
                    <Outlet />
                </main>

                {/* <footer className="app-footer"><Footer/></footer> */}
           </div>
        </div>
    )
}

export default ProtectedAppLayout
