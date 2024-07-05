import styles from "./a-leaderboards.module.scss"
import Image from "next/image";

export default function ALeaderboards() {

    return (
        <>
            <div className={styles.aleaderboards}>
                <div className={styles.aleaderboards__container}>
                    <div className={styles.aleaderboards__containerinfo}>
                        <h2 className={styles.aleaderboards__title}>Auditor Leaderboard</h2>
                        <div className={styles.aleaderboards__table}>
                            <div className={styles.aleaderboards__header}>
                                <div className={styles.aleaderboards__headerdiv}>
                                    <span>Position</span>
                                    <Image width={8} height={8} src="/icons/arrow-down-red-400.png"/>
                                </div>
                                <div className={styles.aleaderboards__bigdiv}>
                                    <span>Auditor</span>
                                    <Image width={8} height={8} src="/icons/arrow-down-red-400.png"/>
                                </div>
                                <div className={styles.aleaderboards__headerdiv}>
                                    <span>Level</span>
                                    <Image width={8} height={8} src="/icons/arrow-down-red-400.png"/>
                                </div>
                                <div className={styles.aleaderboards__bigdiv}>
                                    <span>Twitter</span>
                                </div>
                                <div className={styles.aleaderboards__bigdiv}>
                                    <span>Github</span>
                                </div>
                                <div className={styles.aleaderboards__headerdiv}>
                                    <span>Total Bounties</span>
                                    <Image width={8} height={8} src="/icons/arrow-down-red-400.png"/>
                                </div>
                                <div className={styles.aleaderboards__headerdiv}>
                                    <span>Dollars Earned</span>
                                    <Image width={8} height={8} src="/icons/arrow-down-red-400.png"/>
                                </div>
                            </div>
                            <div className={styles.aleaderboards__content}>
                                <div className={styles.aleaderboards__row}>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        #1
                                    </div>
                                    <div className={styles.aleaderboards__row__contentbigdiv}>
                                        <div className={styles.aleaderboards__row__contentbigdiv__tog}>
                                            <Image width={24} height={24} src="/image-avatar-big.png" alt="Wallet Icon"/>
                                            <span className={styles.aleaderboards__row__username}>Username</span>
                                        </div>
                                    </div>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        <span className={styles.aleaderboards__row__responsive}>Level</span> 1
                                    </div>
                                    <div className={styles.aleaderboards__row__contentbigdiv}>
                                        <span className={styles.aleaderboards__row__responsive}>Speciality</span> Lorem ipsumLorem ipsum
                                    </div>
                                    <div className={styles.aleaderboards__row__contentbigdiv}>
                                        <span className={styles.aleaderboards__row__responsive}>Bounties</span> github.com/0xWeisss0xWsss
                                    </div>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        <span className={styles.aleaderboards__row__responsive}>Cost rate</span> 4
                                    </div>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        $10.00
                                    </div>
                                </div>
                                <div className={styles.aleaderboards__row}>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        #1
                                    </div>
                                    <div className={styles.aleaderboards__row__contentbigdiv}>
                                        <Image width={24} height={24} src="/image-avatar-big.png" alt="Wallet Icon"/>
                                        <span className={styles.aleaderboards__row__username}>Username</span>
                                    </div>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        1
                                    </div>
                                    <div className={styles.aleaderboards__row__contentbigdiv}>
                                        Lorem ipsumLorem ipsum
                                    </div>
                                    <div className={styles.aleaderboards__row__contentbigdiv}>
                                        github.com/0xWeisss0xWsss
                                    </div>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        4
                                    </div>
                                    <div className={styles.aleaderboards__row__contentdiv}>
                                        $10.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image width={530} height={530} src="/degrade-graphic-2.png" alt="" className={styles.aleaderboards__degrade}/>
                </div>
                
            </div>
        </>
    );
}