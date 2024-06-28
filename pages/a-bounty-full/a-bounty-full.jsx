import styles from "./a-bounty-full.module.scss"
import Image from "next/image";

export default function ABountyFull() {
    return (
        <>
            <div className={styles.bountyfull}>
                <div className={styles.bountyfull__back}>
                    <span className={styles.bountyfull__back__first}>Auditor Dashboard</span>
                    <Image width={24} height={24} src="/icons/chevron-right.png" alt="" />
                    <span className={styles.bountyfull__back__second}>Project Bounty</span>
                </div>
                <div className={styles.bountyfull__container}>
                    <div className={styles.bountyfull__protocols}>
                        <div className={styles.bountyfull__protocols__container}>
                            <Image width={50} height={50} src="/profile-chat-2.png" alt="" />
                            <h2 className={styles.bountyfull__protocols__container__tittle}>Bounty Name</h2>
                            <span className={styles.bountyfull__protocols__container__content}>Ended</span>
                        </div>
                        <p className={styles.bountyfull__protocols__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque </p>
                        <p className={styles.bountyfull__protocols__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque </p>
                    </div>
                    <div className={styles.bountyfull__results}>
                        <div className={styles.bountyfull__audit}>
                            <div className={styles.bountyfull__audit__item}>
                                <span className={styles.bountyfull__audit__tittle}>Auditor</span>
                                <span className={styles.bountyfull__audit__content}><Image width={21} height={21} src="/image-avatar-big.png" alt="" />Username</span>
                            </div>
                            <div className={styles.bountyfull__audit__item}>
                                <span className={styles.bountyfull__audit__tittle}>Audit Report</span>
                                <span className={styles.bountyfull__audit__content}>https://github.com /GeorgeHNTR/...</span>
                            </div>
                            <div className={styles.bountyfull__audit__item}>
                                <span className={styles.bountyfull__audit__tittle}>Start Date</span>
                                <span className={styles.bountyfull__audit__content}>15 april 3:00 PM</span>
                            </div>
                            <div className={styles.bountyfull__audit__item}>
                                <span className={styles.bountyfull__audit__tittle}>End Date</span>
                                <span className={styles.bountyfull__audit__content}>15 may 3:00 PM</span>
                            </div>
                            <div className={styles.bountyfull__audit__item}>
                                <span className={styles.bountyfull__audit__tittle}>Total Rewards</span>
                                <span className={styles.bountyfull__audit__content}>30,000 USDC</span>
                            </div>
                        </div>
                        <div className={styles.bountyfull__result}>
                            <h2 className={styles.bountyfull__result__title}>Result</h2>
                            <div className={styles.bountyfull__result__data}>
                                <div className={styles.bountyfull__result__item}>
                                    <span className={styles.bountyfull__result__itemtit}>Critical Issues:</span>
                                    <span className={styles.bountyfull__result__itemcon}>0</span>
                                </div>
                                <div className={styles.bountyfull__result__item}>
                                    <span className={styles.bountyfull__result__itemtit}>High severity Issues:</span>
                                    <span className={styles.bountyfull__result__itemcon}>0</span>
                                </div>
                                <div className={styles.bountyfull__result__item}>
                                    <span className={styles.bountyfull__result__itemtit}>High severity Issues:</span>
                                    <span className={styles.bountyfull__result__itemcon}>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image width={82} height={82} src="/degrade-type2.png" alt="" className={styles.bountyfull__degrade} />
                </div>
            </div>
        </>
    );
}