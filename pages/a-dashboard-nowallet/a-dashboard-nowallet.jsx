import styles from "./a-dashboard-nowallet.module.scss"
import Image from "next/image";

export default function ADashboardNoWallet() {
    return (
        <>
            <div className={styles.adashboardnowallet}>
                <div className={styles.adashboardnowallet__container}>
                    <div>
                        <h2>Connect your wallet in order to access this page</h2>
                    </div>
                    <Image width={480} height={480} src="/image-illustration.png" alt="" className={styles.adashboardnowallet__image}/>
                    <Image width={330} height={330} src="/gradient-circle.png" alt="" className={styles.adashboardnowallet__degrade1}/>
                    <Image width={80} height={80} src="/degrade-type2.png" alt="" className={styles.adashboardnowallet__degrade2}/>
                </div>
            </div>
        </>
    );
}