import { useState } from 'react';

import Styles from '../AuthSection.module.css';
import { useSelector } from 'react-redux';
import { useRegister } from '../../../hooks/useAuth';

function SignupForm({onToggleForm}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const authError = useSelector((state) => state.auth.error);

    const { mutate :register, isPending } = useRegister();
    


    function handleToggle(event) {
        event.preventDefault();
        onToggleForm();
    }

    function handleSubmit(event) {
        event.preventDefault();
        register({name, email, password, confirmPassword});
        console.log(`authError ${authError}`);
    }

    if (isPending) return <div>Loading...</div>

    return (
        <div className={Styles.authCard} id="signupForm">
        <h2 className={Styles.authTitle}>Create Your Account</h2>
        <div className={Styles.alertDanger} id="signupAlert"></div>
        <form className={Styles.authForm} id="signupFormElement" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className={Styles.formGroup}>
                <label htmlFor="signupName" className={Styles.formLabel}>Full Name</label>
                <input type="text" id="signupName" className={Styles.formControl} placeholder="Enter your full name" required
                onChange={(e) => setName(e.target.value)} value={name}
                />
            </div>
            <div className={Styles.formGroup}>
                <label htmlFor="signupEmail" className={Styles.formLabel}>Email</label>
                <input type="email" id="signupEmail" className={Styles.formControl} placeholder="Enter your email" required
                onChange={(e) => setEmail(e.target.value)} value={email}
                />
            </div>
            <div className={Styles.formGroup}>
                <label htmlFor="signupPassword" className={Styles.formLabel}>Password</label>
                <input type="password" id="signupPassword" className={Styles.formControl} placeholder="Create a password" required 
                onChange={(e) => setPassword(e.target.value)} value={password}
                />
                <small className={Styles.formText}>Must be at least 8 characters with letters and numbers</small>
            </div>
            <div className={Styles.formGroup}>
                <label htmlFor="signupConfirmPassword" className={Styles.formLabel}>Confirm Password</label>
                <input type="password" id="signupConfirmPassword" className={Styles.formControl} placeholder="Confirm your password" required
                onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                />
            </div>
            <button type="submit" className={`${Styles.btn} ${Styles.btnBlock}`}>Sign Up</button>
        </form>
        <div className={Styles.switchForm}>
            <p>Already have an account? <a href="#" id="showLogin" onClick={(e)=>handleToggle(e)}>Login instead</a></p>
        </div>
    </div>
    )
}

export default SignupForm
