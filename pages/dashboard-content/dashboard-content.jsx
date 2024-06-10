import styles from "./dashboard-content.module.scss"
import Image from "next/image";

export default function DashboardContent() {
    return (
        <>
            <div className={styles.dashboardnocontent}>
                <div className={styles.dashboardnocontent__container}>
                    <div className={styles.dashboardnocontent__titlesection}>
                        <p>Protocol Dashboard</p>
                        <div>
                            <Image width={12} height={12} src="/icons/user-icon.png" alt="Wallet Icon"/>
                            <span>Post bounty</span>
                        </div>
                    </div>
                    <div className={styles.dashboardnocontent__contentsection}>
                        <div className={styles.dashboardnocontent__side}>
                            <p>Your live audit postings</p>
                            <div className={styles.list}>
                                <div className={styles.dashboardnocontent__itemlistliveaudit}>
                                    <div>
                                        <span className={styles.dashboardnocontent__itemlistliveaudit__title}>Ended in X days</span>
                                        <div className={styles.dashboardnocontent__itemlistliveaudit__username}>
                                            <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                            <span>Username Auditor</span>
                                        </div>
                                    </div>
                                    <span className={styles.dashboardnocontent__itemlistliveaudit__button}>
                                        More details
                                    </span>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistliveaudit}>
                                    <div>
                                        <span className={styles.dashboardnocontent__itemlistliveaudit__title}>Ended in X days</span>
                                        <div className={styles.dashboardnocontent__itemlistliveaudit__username}>
                                            <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                            <span>Username Auditor</span>
                                        </div>
                                    </div>
                                    <span className={styles.dashboardnocontent__itemlistliveaudit__button}>
                                        More details
                                    </span>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistliveaudit}>
                                    <div>
                                        <span className={styles.dashboardnocontent__itemlistliveaudit__title}>Ended in X days</span>
                                        <div className={styles.dashboardnocontent__itemlistliveaudit__username}>
                                            <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                            <span>Username Auditor</span>
                                        </div>
                                    </div>
                                    <span className={styles.dashboardnocontent__itemlistliveaudit__button}>
                                        More details
                                    </span>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistliveaudit}>
                                    <div>
                                        <span className={styles.dashboardnocontent__itemlistliveaudit__title}>Ended in X days</span>
                                        <div className={styles.dashboardnocontent__itemlistliveaudit__username}>
                                            <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                            <span>Username Auditor</span>
                                        </div>
                                    </div>
                                    <span className={styles.dashboardnocontent__itemlistliveaudit__button}>
                                        More details
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dashboardnocontent__side}>
                            <p>Auditor requests</p>
                            <div className={styles.list}>
                                <div className={styles.dashboardnocontent__itemlistauditor}>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceleft}>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username name</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>Speciality</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>Level 4</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceright}>
                                        <span className={styles.viewprofile}>View Profile</span>
                                    </div>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistauditor}>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceleft}>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>holis</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>heyy</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceright}>
                                        <span className={styles.viewprofile}>View Profile</span>
                                    </div>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistauditor}>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceleft}>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>holis</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>heyy</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceright}>
                                        <span className={styles.viewprofile}>View Profile</span>
                                    </div>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistauditor}>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceleft}>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>holis</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>heyy</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceright}>
                                        <span className={styles.viewprofile}>View Profile</span>
                                    </div>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistauditor}>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceleft}>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>holis</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>heyy</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceright}>
                                        <span className={styles.viewprofile}>View Profile</span>
                                    </div>
                                </div>
                                <div className={styles.dashboardnocontent__itemlistauditor}>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceleft}>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>holis</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__space}>
                                        <span>heyy</span>
                                    </div>
                                    <div className={styles.dashboardnocontent__itemlistauditor__spaceright}>
                                        <span className={styles.viewprofile}>View Profile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboardnocontent__previoussection}>
                        <h3>Previous projects</h3>
                        <div className={styles.dashboardnocontent__previoustable}>
                            <div className={styles.dashboardnocontent__previoustable__header}>
                                <div>
                                    <span>Project name</span>
                                </div>
                                <div>
                                    <span>Username Auditor</span>
                                </div>
                                <div>
                                    <span>Audit Report</span>
                                </div>
                                <div>
                                    <span>Total Rewards</span>
                                </div>
                            </div>
                            <div className={styles.dashboardnocontent__previoustable__content}>
                                <div className={styles.dashboardnocontent__itemtable}>
                                    <div>
                                        <span>Project name</span>
                                    </div>
                                    <div>
                                        <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                        <span>Username Auditor</span>
                                    </div>
                                    <div>
                                        <span>https://github.com/oslugr/repo-ejemplo.git</span>
                                    </div>
                                    <div>
                                        <span>$10.00 - 96.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="adorno-2.png" alt="Wallet Icon" className={styles.dashboardnocontent__firstcircle}/>
                <img src="adorno-2.png" alt="Wallet Icon" className={styles.dashboardnocontent__secondcircle}/>
            </div>
        </>
    );
}