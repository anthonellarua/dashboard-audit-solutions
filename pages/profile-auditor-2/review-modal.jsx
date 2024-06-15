import styles from "./review-modal.module.scss";
import Image from "next/image";
import { useState } from "react";

const ReviewModal = ({ isOpen, onRequestClose }) => {
    if (!isOpen) return null;

    const [isSended, setIsSended] = useState(false);

    const handleSend = () => {
        setIsSended(true);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__modal}>
                {isSended ? (
                    <div className={styles.thankmessage}>
                        <div>
                            <h3>Thank you</h3>
                            <span>for write a review</span>
                        </div>
                        <button onClick={onRequestClose} className={styles.thankmessage__closebutton}><Image width={24} height={24} src="/icons/close-icon.png"/></button>
                        <Image width={110} height={190} src="/circle-with-gradients.png" className={styles.thankmessage__gradientright}/>
                        <Image width={110} height={190} src="/circle-with-gradients.png" className={styles.thankmessage__gradientleft}/>
                        <Image width={250} height={250} src="/adorno-2.png" className={styles.thankmessage__gradientcenter}/>
                    </div>
                ) : (
                    <>
                        <h2>Write a Review</h2>
                        <form>
                            <div>
                                <span>General Review</span>
                                <span className={styles.overlay__modal__stars}>☆☆☆☆☆</span>
                            </div>
                            <div>
                                <span>Proyect Name:</span>
                                <input />
                            </div>
                            <div>
                                <span>Review</span>
                                <textarea />
                            </div>
                            <button onClick={handleSend} className={styles.overlay__submitbutton}>Post review</button>
                        </form>
                        <button type="button" onClick={onRequestClose} className={styles.overlay__closebutton}><Image width={24} height={24} src="/icons/close-icon.png"/></button>
                        <Image width={140} height={140} src="/adorno-1.png" className={styles.overlay__radialgradient}/>
                    </>
                )}
            </div>
        </div>
    );
};

export default ReviewModal;
