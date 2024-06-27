import styles from "./a-dashboard-acceptedaudits.module.scss"
import Image from "next/image";

export default function ADashboardAcceptedAudits() {

    return (
        <>
            <div className={styles.adashboard}>
                <div className={styles.adashboard__back}>
                    <span>Dashboard</span>
                    <Image width={24} height={24} src="/icons/chevron-right.png" alt="" />
                    <span>Accepted audits</span>
                </div>
                <div className={styles.adashboard__container}>
                    <h2>Accepted audits</h2>
                    <div>
                        <div className={styles.adashboard__item}>
                            <div className={styles.adashboard__item__name}>
                                <Image width={24} height={24} src="/profile-chat-2.png" alt="" />
                                <span>Bounty Name</span>
                            </div>
                            <div className={styles.adashboard__item__ended}>
                                <span>Ends in 5 days</span>
                            </div>
                            <div className={styles.adashboard__item__view}>
                                <span>View project</span>
                            </div>
                        </div>
                        <div className={styles.adashboard__item}>
                            <div className={styles.adashboard__item__name}>
                                <Image width={24} height={24} src="/profile-chat-2.png" alt="" />
                                <span>Bounty Name</span>
                            </div>
                            <div className={styles.adashboard__item__ended}>
                                <span>Ends in 5 days</span>
                            </div>
                            <div className={styles.adashboard__item__view}>
                                <span>View project</span>
                            </div>
                        </div>
                        <div className={styles.adashboard__item}>
                            <div className={styles.adashboard__item__name}>
                                <Image width={24} height={24} src="/profile-chat-2.png" alt="" />
                                <span>Bounty Name</span>
                            </div>
                            <div className={styles.adashboard__item__ended}>
                                <span>Ends in 5 days</span>
                            </div>
                            <div className={styles.adashboard__item__view}>
                                <span>View project</span>
                            </div>
                        </div>
                    </div>
                    <Image width={127} height={127} src="/adorno-2.png" alt="" className={styles.adashboard__degrade1}/>
                    <Image width={127} height={127} src="/adorno-2.png" alt="" className={styles.adashboard__degrade2}/>
                </div>
            </div>
        </>
    );
}