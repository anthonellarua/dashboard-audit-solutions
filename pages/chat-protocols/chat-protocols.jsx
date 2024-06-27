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
                        Conversation
                    </div>
                </div>
                <Image width={370} height={370} src="/gradient-circle.png" alt="" className={styles.profile__gradientcircle} />
            </div>
        </>
    );
}