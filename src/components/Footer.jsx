import styles from "./Footer.module.css";


function Footer() {
    return (
            <footer className={styles.footer}>
                    <div className='container'>
                        <div className={styles.footerContent}>
                            <div className={styles.footerLogo}>Task Master</div>
                            <ul className={styles.footerLinks}>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <p className={styles.copyright}>© 2025 Task Master. All rights reserved.</p>
                    </div>
            </footer>
    )
}

export default Footer


