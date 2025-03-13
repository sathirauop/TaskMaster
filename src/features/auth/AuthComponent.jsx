import { useState } from 'react';
import Styles from './AuthSection.module.css'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


function AuthSection({onLoginSuccess}) {

    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <section>
            <div className={Styles.authContainer}>
                {isLoginForm ? (
                    <LoginForm onToggleForm={() => setIsLoginForm(false)} onLoginSuccess={onLoginSuccess}/>
                ) : (
                    <SignupForm onToggleForm={() => setIsLoginForm(true)}/>
                )}
            </div>
        </section>
    )
}


export default AuthSection
