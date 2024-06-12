import styles from "./profile-auditor-1.module.scss"
import Image from "next/image";

export default function ProfileAuditor1() {
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.profile__back}>
                    <span>Auditor Retainers</span>
                    <Image width={24} height={24} src="/icons/chevron-right.png" alt="" />
                    <span>Username</span>
                </div>
                <div className={styles.profile__container}>
                    <div className={styles.profile__userdata}>
                        <section className={styles.profile__userdata__photo}>
                            <Image width={200} height={200} src="/foto-perfil.png" alt="" />
                            <Image width={200} height={200} src="/adorno-2.png" alt="" className={styles.profile__usercircle} />
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. </p>
                        </section>
                        <section className={styles.profile__userdata__data}>
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
                        </section>
                    </div>
                    <div className={styles.profile__usercontact}>
                        <div className={styles.profile__usercontact__title}>
                            <h2>Username Auditor</h2>
                            <span>Specialty</span>
                        </div>
                        <div className={styles.profile__usercontact__ranking}>
                            <div>
                                <span>Ranking</span>
                                <span>8,0 ★★★★☆</span>
                            </div>
                            <div>
                                <span>Level</span>
                                <span>1</span>
                            </div> 
                        </div>
                        <div className={styles.profile__usercontact__buttons}>
                            <span>Contact me<Image width={16} height={16} src="/icons/chat-icon.png" alt=""/></span>
                            <span>Reviews<Image width={16} height={16} src="/icons/pencil-icon.png" alt=""/></span>
                            <span>Social media<Image width={16} height={16} src="/icons/share-icon.png" alt=""/></span>
                        </div>
                        <div className={styles.profile__usercontact__form}>
                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornarrnarrnae purus</p>
                            <div className={styles.profile__usercontact__inputs}>
                                <div>
                                    <input placeholder="Name"/>
                                    <input placeholder="Email adress"/>
                                </div>
                                <textarea placeholder="Message"/>
                            </div>
                            <button>Send a message</button>
                        </div>
                    </div>
                </div>
                <Image width={140} height={140} src="/degrade-type2.png" alt="" className={styles.profile__firstcircle} />
                <Image width={370} height={370} src="/gradient-circle.png" alt="" className={styles.profile__gradientcircle} />
            </div>
        </>
    );
}