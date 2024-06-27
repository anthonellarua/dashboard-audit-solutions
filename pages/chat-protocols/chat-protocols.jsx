import styles from "./chat-protocols.module.scss"
import Image from "next/image";

export default function ChatProtocols() {
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.profile__container}>
                    <div className={styles.profile__chats}>
                        <h2>Chats</h2>
                        <div className={styles.profile__inputsearch}>
                            <input placeholder="Search" />
                            <Image width={24} height={24} src="/icons/search-icon.png" alt="" className={styles.profile__inputsearch__search} />
                        </div>
                        <div className={styles.chat}>
                            <div className={styles.chat__item__active}>
                                <Image width={44} height={44} src="/profile-chat-1.png" alt="" />
                                <span>Hyacinth</span>
                            </div>
                            <div className={styles.chat__item}>
                                <Image width={44} height={44} src="/profile-chat-2.png" alt="" />
                                <span>Hyacinth</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profile__conversation}>
                        <div className={styles.profile__user}>
                            <Image width={44} height={44} src="/profile-chat-1.png" alt="" />
                            <div>
                                <span>Hyacinth</span>
                                <span>Contact center</span>
                            </div>
                        </div>
                        <div className={styles.profile__messages}>
                            <div className={styles.profile__messages__message}>
                                <Image width={44} height={44} src="/profile-chat-1.png" alt="" />
                                <p>Welcome to Hyacinth Audits!<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo tortor, porttitor sed viverra eget, convallis vitae sem. Cras lacinia erat dapibus, scelerisque lorem sed, condimentum elit.ensuring the integrity and quality of our services.</p>
                            </div>
                        </div>
                        <div className={styles.profile__inputsend}>
                            <input placeholder="Send a message"/>
                            <Image width={24} height={24} src="/icons/send-icon.png" alt="" className={styles.profile__inputsend__sendicon}/>
                        </div>
                    </div>
                </div>
                <Image width={370} height={370} src="/gradient-circle.png" alt="" className={styles.profile__gradientcircle} />
            </div>
        </>
    );
}