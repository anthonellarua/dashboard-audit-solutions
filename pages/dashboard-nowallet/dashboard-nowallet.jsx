import styles from "./dashboard-nowallet.module.scss"

export default function DashboardNoWallet() {
    return (
        <>
            <div className={styles.dashboardnowallet}>
                <div className={styles.dashboardnowallet__container}>
                    <p>Connect your wallet in order to access this page</p>
                    <div className={styles.dashboardnowallet__imagecontainer}>
                        <img src="image.png" alt=""/>
                    </div>
                </div>
                <img src="adorno-1.png" alt="" className={styles.dashboardnowallet__firstcircle}/>
                <img src="adorno-2.png" alt="" className={styles.dashboardnowallet__secondcircle}/>
            </div>
        </>
    );
}