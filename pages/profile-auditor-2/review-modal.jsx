import styles from "./review-modal.module.scss";
import Image from "next/image";

const ReviewModal = ({ isOpen, onRequestClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__modal}>
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
                    <button type="submit" className={styles.overlay__submitbutton}>Post review</button>
                </form>
                <button type="button" onClick={onRequestClose} className={styles.overlay__closebutton}><Image width={24} height={24} src="/icons/close-icon.png"/></button>
                <Image width={140} height={140} src="/adorno-1.png" className={styles.overlay__radialgradient}/>
            </div>
        </div>
    );
};

export default ReviewModal;
