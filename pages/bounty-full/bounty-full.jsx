import styles from "./bounty-full.module.scss"
import Image from "next/image";

export default function BountyFull() {
    return (
        <>
            <div className={styles.bountyfull}>
                <div className={styles.bountyfull__back}>
                    <span>Protocols Dashboard</span>
                    <Image width={24} height={24} src="/icons/chevron-right.png" alt="" />
                    <span>Project Bounty</span>
                </div>
                <div className={styles.bountyfull__container}>
                    <div className={styles.bountyfull__protocols}>
                        <div>
                            <Image width={32} height={32} src="/icons/user-person-icon.png" alt="" />
                            <h2>Project name protocols</h2>
                            <span>Ended</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque </p>
                    </div>
                    <div className={styles.bountyfull__results}>
                        <div className={styles.bountyfull__audit}>
                            <div>
                                <span>Auditor</span>
                                <span><Image width={21} height={21} src="/icons/user-person-icon.png" alt="" />Username</span>
                            </div>
                            <div>
                                <span>Audit Report</span>
                                <span>https://github.com /GeorgeHNTR/...</span>
                            </div>
                            <div>
                                <span>Start Date</span>
                                <span>15 april 3:00 PM</span>
                            </div>
                            <div>
                                <span>End Date</span>
                                <span>15 may 3:00 PM</span>
                            </div>
                            <div>
                                <span>Total Rewards</span>
                                <span>30,000 USDC</span>
                            </div>
                        </div>
                        <div className={styles.bountyfull__result}>
                            <h2>Result</h2>
                            <div className={styles.bountyfull__result__data}>
                                <div>
                                    <span>Critical Issues:</span>
                                    <span>0</span>
                                </div>
                                <div>
                                    <span>High severity Issues:</span>
                                    <span>0</span>
                                </div>
                                <div>
                                    <span>High severity Issues:</span>
                                    <span>0</span>
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