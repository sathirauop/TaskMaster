import { useState } from 'react';
import Styles from '../AuthSection.module.css';
import { useLogin } from '../../../hooks/useAuth';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

function LoginForm({onToggleForm,onLoginSuccess}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const authError = useSelector((state) => state.auth.error);
    const { mutate: login, isPending} = useLogin();

    function handleToggle(event) {
        event.preventDefault();
        onToggleForm();
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password);
        login({email, password},
            {
                onSuccess: () => {
                    console.log(`onSuccess Component`);
                    onLoginSuccess?.();
            }}
        );
    }

    if (isPending) return 'Loading...'

    return (
            <div className={Styles.authCard} id="loginForm">
                         <h2 className={Styles.authTitle}>Login to Your Account</h2>
                         <div className={`${Styles.alert}${Styles.alertDanger}`} id="loginAlert"></div>
                         <form className={Styles.authForm} id="loginFormElement" onSubmit={(e)=> handleSubmit(e)}>
                             <div className={Styles.formGroup}>
                                     <label htmlFor="loginEmail" className={Styles.formLabel}>Email</label>
                                     <input type="email" id="loginEmail" className={Styles.formControl} placeholder="Enter your email" required
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                     />
                                     </div>
                                         <div className={Styles.formGroup}>
                                             <label htmlFor="loginPassword" className={Styles.formLabel}>Password</label>
                                             <input type="password" id="loginPassword" className={Styles.formControl} placeholder="Enter your password" required
                                                onChange={(e) => setPassword(e.target.value)} value={password}
                                             />
                                             <small className={Styles.formText}>Forgot your password? <a href="#">Reset it here</a></small>
                                         </div>
                                         <button type="submit" className={`${Styles.btn} ${Styles.btnBlock}`}>Login</button>
                                     </form>
                             <div className={Styles.switchForm}>
                <p>Don't have an account? <a href="#" id="showSignup" onClick={(e)=>handleToggle(e)}>Sign up now</a></p>
            </div>
        </div>
    )
}

export default LoginForm
