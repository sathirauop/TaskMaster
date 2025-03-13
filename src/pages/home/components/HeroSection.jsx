import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroText}>
                <h1 className={styles.pageTitle}>Manage Your Tasks <span className={styles.highlight}>Effortlessly</span></h1>
                <p className={styles.pageDescription}>A comprehensive task management solution designed to help you organize, track, and complete your tasks with ease. Sign up today and boost your productivity.</p>
            </div>
            <div className={styles.heroImage}>
                <img src="/api/placeholder/500/300" alt="Task Management Illustration"/>
            </div>
      </section>
    )
}

export default HeroSection
