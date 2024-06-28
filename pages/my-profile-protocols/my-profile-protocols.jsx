import styles from "./my-profile-protocols.module.scss"
import Image from "next/image";

export default function MyProfileProtocolsEdit() {
    return (
        <>
            <div className={styles.profileedit}>
                <div className={styles.profileedit__container}>
                    <div className={styles.profileedit__image}>
                        <Image width={256} height={256} src="/profile-chat-2.png" alt="" className={styles.profile}/>
                        <div className={styles.edit_icon}>
                            <Image width={21} height={21} src="/icons/edit-icon.png" alt="" />
                        </div>
                        <Image width={100} height={100} src="/adorno-2.png" alt="" className={styles.degrade} />
                    </div>
                    <div className={styles.form}>
                        <div className={styles.form__item}>
                            <span className={styles.form__tittle}>Username:</span>
                            <input placeholder="Sara Miller" className={styles.form__input}/>
                        </div>
                        <div className={styles.form__item}>
                            <span className={styles.form__tittle}>E-mail:</span>
                            <input placeholder="Saramiller@gmail.com" className={styles.form__input}/>
                        </div>
                        <div className={styles.form__item}>
                            <span className={styles.form__tittle}>Wallet address:</span>
                            <input placeholder="0-w923427342934" className={styles.form__input}/>
                        </div>
                        <div className={styles.form__notifications}>
                            <span className={styles.form__tittle}>Alerts & Notifications</span>
                            <div className={styles.checkboxes}>
                                <div className={styles.checkboxes__input}>
                                    <input type="checkbox"/>
                                    <span>Get hyacinth news, announcements, and product updates</span>
                                </div>
                                <div className={styles.checkboxes__input}>
                                    <input type="checkbox"/>
                                    <span>Get important notifications about you or activity you've missed</span>
                                </div>
                            </div>
                        </div>
                        <button>Save Changes</button>
                    </div>
                </div>
                <Image width={372} height={372} src="/gradient-circle.png" alt="" className={styles.degrade_circle} />
            </div>
        </>
    );
}