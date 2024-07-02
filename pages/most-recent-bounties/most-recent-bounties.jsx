import styles from "./most-recent-bounties.module.scss"
import Image from "next/image";

export default function MostRecentBounties() {

    return (
        <>
            <div className={styles.mrecentbounties}>
                <div className={styles.mrecentbounties__container}>
                    <div className={styles.mrecentbounties__title}>
                        <Image width={240} height={65} src="/dotted-crescent.png"/>
                        Check out the most recent bounties
                    </div>
                    <div className={styles.mrecentbounties__content}>
                        <div className={styles.mrecentbounties__table}>
                            <div className={styles.mrecentbounties__table__item}>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Start in 20 days</span>
                                    <span className={styles.mrecentbounties__table__content}><Image width={20} height={20} src="/profile-chat-2.png"/>Bounty Name</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Start Date</span>
                                    <span className={styles.mrecentbounties__table__content}>11 may 3:00 PM</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Auditor level</span>
                                    <span className={styles.mrecentbounties__table__content}>Level 1</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Total Rewards</span>
                                    <span className={styles.mrecentbounties__table__content}>30,000 USDC</span>
                                </div>
                                <button className={styles.mrecentbounties__table__button}>More details</button>
                            </div>
                            <div className={styles.mrecentbounties__table__item}>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Start in 20 days</span>
                                    <span className={styles.mrecentbounties__table__content}><Image width={20} height={20} src="/profile-chat-2.png"/>Bounty Name</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Start Date</span>
                                    <span className={styles.mrecentbounties__table__content}>11 may 3:00 PM</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Auditor level</span>
                                    <span className={styles.mrecentbounties__table__content}>Level 1</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Total Rewards</span>
                                    <span className={styles.mrecentbounties__table__content}>30,000 USDC</span>
                                </div>
                                <button className={styles.mrecentbounties__table__button}>More details</button>
                            </div>
                            <div className={styles.mrecentbounties__table__item}>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Start in 20 days</span>
                                    <span className={styles.mrecentbounties__table__content}><Image width={20} height={20} src="/profile-chat-2.png"/>Bounty Name</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Start Date</span>
                                    <span className={styles.mrecentbounties__table__content}>11 may 3:00 PM</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Auditor level</span>
                                    <span className={styles.mrecentbounties__table__content}>Level 1</span>
                                </div>
                                <div className={styles.mrecentbounties__table__column}>
                                    <span className={styles.mrecentbounties__table__title}>Total Rewards</span>
                                    <span className={styles.mrecentbounties__table__content}>30,000 USDC</span>
                                </div>
                                <button className={styles.mrecentbounties__table__button}>More details</button>
                            </div>
                        </div>
                        <button className={styles.mrecentbounties__button}>View more <Image width={16} height={16} src="/icons/arrow-right-red.png"/></button>
                    </div>
                </div>
            </div>
        </>
    );
}