import { useNavigate } from "react-router";
import { useLogout } from "../hooks/useAuth";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

function Header() {

    const logout = useLogout();
    const navigate =useNavigate()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const userName = useSelector(state => state.auth?.user?.name);

    const handleLogout = (e) => {
        e.preventDefault();
        logout(); // Clear auth state and query cache
        navigate('/'); // Redirect to home page
      };


    return (

        <header className={styles.navbar}>
            <div className={`${styles.navbarContainer} container`}>
                <a href="#" className={styles.logo}>Task Master</a>
                <ul className={styles.navlinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    {isAuthenticated && <li><a href="#">{`Welcome ${userName}`}</a></li>}
                    {isAuthenticated && <li><a href="#" onClick={(e)=>handleLogout(e)}>Logout</a></li>}
                </ul>
            </div>
        </header>
    )
}

export default Header
