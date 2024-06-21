import styles from "./a-apply.module.scss"
import Image from "next/image";
import { useState } from "react";

export default function AApply() {
    const [isApplied, setIsApplied] = useState(false);
    const handleApplyNow = () => {
        setIsApplied(true);
    };

    return (
        <>
            <div className={styles.aapply}>
                <div className={styles.aapply__container}>
                    <div className={styles.aapply__background}>
                        <div className={styles.aapply__info}>
                            <div>
                                <h2>Apply to be an auditor</h2>
                                <p>Below you can find the application form to become an auditor. Please allow 2-3 weeks for your application to be reviewed. Incomplete applications will not be considered.</p>
                            </div>
                            <div className={styles.aapply__info__image}>
                                <Image width={290} height={290} src="/img-a-audit.png" alt="" className={styles.aapply__image}/>
                                <Image width={80} height={80} src="/degrade-type2.png" alt="" className={styles.aapply__degrade2}/>
                            </div>
                        </div>
                        <div className={styles.aapply__form}>
                            {isApplied ? (
                                <div className={styles.aapply__thankmessage}>
                                    <h2>Thanks you for apply</h2>
                                    <span>We will contact you by message if you are selected.</span>
                                </div>
                            ) : (
                                <>
                                    <div className={styles.aapply__form__container}>
                                        <div className={styles.aapply__doubleinput}>
                                            <div>
                                                <span>Wallet address:</span>
                                                <input />
                                            </div>
                                            <div>
                                                <span>Choose a username</span>
                                                <input />
                                            </div>
                                        </div>
                                        <div className={styles.aapply__completeinput}>
                                            <span>Choose a username</span>
                                            <input placeholder="Separate by comma"/>
                                        </div>
                                        <div className={styles.aapply__doubleinput}>
                                            <div>
                                                <span>What is your Calendly link?</span>
                                                <input placeholder="https://github.com/my-project"/>
                                            </div>
                                            <div>
                                                <span>LinkedIn</span>
                                                <input placeholder="https://hyacinth.com"/>
                                            </div>
                                        </div>
                                        <div className={styles.aapply__completeinput}>
                                            <span>Previous development history (CV, Projects, etc.).</span>
                                            <input/>
                                        </div>
                                        <div className={styles.aapply__completeinput}>
                                            <span>Previous audit history Make a new line for each entry.</span>
                                            <input />
                                        </div>
                                        <div className={styles.aapply__completeinput}>
                                            <span>Choose a username</span>
                                            <input/>
                                        </div>
                                    </div>
                                    <button onClick={handleApplyNow}>Publish now<Image width={16} height={16} src="/icons/arrow-right.png" alt=""/></button>
                                </>
                            )}
                        </div>
                        
                    </div>
                    <Image width={106} height={106} src="/adorno-2.png" alt="" className={styles.aapply__degrade1}/>
                    <Image width={330} height={330} src="/gradient-circle.png" alt="" className={styles.aapply__gradientcircle}/>
                </div>
            </div>
        </>
    );
}