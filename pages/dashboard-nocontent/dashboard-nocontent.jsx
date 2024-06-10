import styles from "./dashboard-nocontent.module.scss"

export default function DashboardNoContent() {
    return (
        <>
            <div className={styles.dashboardnocontent}>
                <div className={styles.dashboardnocontent__container}>
                    <div className={styles.dashboardnocontent__titlesection}>
                        <p>Protocol Dashboard</p>
                        <div>
                            <img src="icons/user-icon.png" alt="Wallet Icon"/>
                            <span>Post bounty</span>
                        </div>
                    </div>
                    <div className={styles.dashboardnocontent__contentsection}>
                        <div className={styles.dashboardnocontent__side}>
                            <p>Your live audit postings</p>
                            <span>No open audits</span>
                        </div>
                        <div className={styles.dashboardnocontent__side}>
                            <p>Auditor requests</p>
                            <span>No open audits</span>
                        </div>
                    </div>
                </div>
                <img src="adorno-2.png" alt="Wallet Icon" className={styles.dashboardnocontent__firstcircle}/>
                <img src="adorno-2.png" alt="Wallet Icon" className={styles.dashboardnocontent__secondcircle}/>
            </div>
        </>
    );
}