import { useLocation, useNavigate } from "react-router";
import AuthSection from "../../features/auth/AuthComponent"
import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { useEffect } from "react";

function HomePage() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    // Inside your HomePage component
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/task';

    // In your login success handler within LoginForm
    const onLoginSuccess = () => {
        navigate(from, { replace: true });
    };

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/task')
        }
    },[isAuthenticated, navigate])


    return (
            <div className="container">
                <HeroSection/>
                {<AuthSection onLoginSuccess={onLoginSuccess}/>}
                <FeaturesSection/>
            </div>
    )
}

export default HomePage
