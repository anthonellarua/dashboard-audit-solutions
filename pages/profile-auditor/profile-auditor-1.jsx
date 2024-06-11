import styles from "./profile-auditor-1.module.scss"
import Image from "next/image";

export default function ProfileAuditor1() {
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.profile__container}>
                    <div className={styles.profile__userdata}>
                        <Image width={200} height={200} src="/foto-perfil.png" alt="" className={styles.photo} />
                        <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. </p>
                        <div>
                            <div>
                                <span>Experience</span>
                                <span>1 years</span>
                            </div>
                            <div>
                                <span>Rates</span>
                                <span>10,000 -30,000 USDC</span>
                            </div>
                            <div>
                                <span>Total Bounties</span>
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profile__usercontact}>
                        <h2>Username Auditor</h2>
                        <span>Specialty</span>
                        <div>
                            <div>
                                <span>Ranking</span>
                                <span>8,0 estrellitas</span>
                            </div>
                            <div>
                                <span>Level</span>
                                <span>1</span>
                            </div> 
                        </div>
                        <div>
                            <span>Contact me</span>
                            <span>Contact me</span>
                            <span>Contact me</span>
                        </div>
                        <section>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornarrnarrnae purus</p>
                            <div>
                                <input />
                                <input />
                            </div>
                            <input />
                            <button>Send a message</button>
                        </section>
                    </div>
                </div>
                <Image width={106} height={106} src="/adorno-2.png" alt="" className={styles.profile__firstcircle} />
            </div>
        </>
    );
}