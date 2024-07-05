import styles from "./a-apply.module.scss"
import Image from "next/image";
import { useState } from "react";
import Tooltip from "../components/tooltip";
import CustomSelect from "../components/custom-select";

export default function AApply() {
    const [isApplied, setIsApplied] = useState(false);
    const handleApplyNow = () => {
        setIsApplied(true);
    };

    //select dropdown
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ];

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
                                <Image width={290} height={290} src="/img-a-audit.png" alt="" className={styles.aapply__info__image__img}/>
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
                                                <input placeholder="walletaddress" />
                                            </div>
                                            <div>
                                                <span>Choose a username
                                                    <Tooltip text="This will be public, the username chosen may not be available and will be changed if so">
                                                        <Image width={9} height={9} src="/icons/information-icon-light.png" />
                                                    </Tooltip>
                                                </span>
                                                <input placeholder="@username"/>
                                            </div>
                                        </div>
                                        <div className={styles.aapply__completeinput}>
                                            <span>Which chains do you want to audit on?</span>
                                            <input placeholder="Ethereum, BCS,..."/>
                                        </div>
                                        <div className={styles.aapply__doubleinput}>
                                            <div>
                                                <span>What is your Calendly link?</span>
                                                <input placeholder="https://calendly.com/user"/>
                                            </div>
                                            <div>
                                                <span>LinkedIn</span>
                                                <input placeholder="https://linkedin.com/user"/>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.aapply__completeinput}>
                                            <span>Previous development history:</span>
                                            <input placeholder="Link to CV, Github, Previous project..."/>
                                        </div>
                                        <div className={styles.aapply__doubleinput}>
                                            <div>
                                                <span>Years of experience:</span>
                                                <input placeholder="0" />
                                            </div>
                                            <div>
                                                <span>Speciality:</span>
                                                <CustomSelect options={options} placeholder="Select options"/>
                                            </div>
                                        </div>
                                        <div className={styles.aapply__doubleinput}>
                                            <div>
                                                <span>Cost rate:</span>
                                                <CustomSelect options={options} placeholder="Select options"/>
                                            </div>
                                            <div>
                                                <span>How long to finish a project?</span>
                                                <input placeholder="1 Month, 2 weekly, etc" />
                                            </div>
                                        </div>
                                        <div className={styles.aapply__doubleinput}>
                                            <div>
                                                <span>How often is the payment made?</span>
                                                <input placeholder="One a week, One a month, etc" />
                                            </div>
                                            <div>
                                                <span>Previous audit:</span>
                                                <input placeholder="Link to audits reports" />
                                            </div>
                                        </div>
                                        <div className={styles.aapply__completeinput}>
                                            <span>Here is a smart contract. There are errors in it. Find as many as you can and detail the errors below.</span>
                                            <input placeholder="Quiz report"/>
                                        </div>
                                    </div>
                                    <button onClick={handleApplyNow}>Apply<Image width={16} height={16} src="/icons/arrow-right.png" alt=""/></button>
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