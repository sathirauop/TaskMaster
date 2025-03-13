import Styles from './FeaturesSection.module.css';

function FeaturesSection() {
    return (
        <section className={Styles.featuresSection}>
            <h2 className={Styles.sectionTitle}>Why Choose <span className={Styles.highlight}>Task Master</span>?</h2>
            <div className={Styles.featuresGrid}>
                <div className={Styles.featureCard}>
                    <div className={Styles.featureIcon}>📋</div>
                    <h3 className={Styles.featureTitle}>Task Organization</h3>
                    <p className={Styles.featureDescription}>Organize tasks by status: Todo, In Progress, In Review, and Done. Prioritize with P1, P2, and P3 levels.</p>
                </div>
                <div className={Styles.featureCard}>
                    <div className={Styles.featureIcon}>⏱️</div>
                    <h3 className={Styles.featureTitle}>Time Tracking</h3>
                    <p className={Styles.featureDescription}>Track time spent on each task. Monitor daily time allocation and analyze your productivity.</p>
                </div>
                <div className={Styles.featureCard}>
                    <div className={Styles.featureIcon}>📊</div>
                    <h3 className={Styles.featureTitle}>Dashboard Analytics</h3>
                    <p className={Styles.featureDescription}>View task summaries, priority distribution, and time allocation visualizations on your dashboard.</p>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection
