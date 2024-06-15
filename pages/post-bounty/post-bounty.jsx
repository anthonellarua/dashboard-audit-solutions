import styles from "./post-bounty.module.scss"
import Image from "next/image";
import { useState } from "react";

export default function PostBounty() {
    const [activeTab, setActiveTab] = useState(1);
    const [isApplied, setIsApplied] = useState(false);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleApplyNow = () => {
        setIsApplied(true);
    };

    return (
        <>
            <div className={styles.postbountynowallet}>
                <div className={styles.postbountynowallet__container}>
                    <div className={styles.postbountynowallet__titlesection}>
                        <div>
                            <h2>Post a Bounty Request</h2>
                            <p>Fill the form below to post a bounty request for your project.</p>
                            <div>
                                <Image width={290} height={290} src="/image.png" className={styles.postbountynowallet__titlesection__image}/>
                                <Image width={100} height={100} src="/degrade-type2.png" className={styles.postbountynowallet__gradientimage}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.postbountynowallet__tabsection}>
                        <div className={styles.postbountynowallet__tabs}>
                            <div
                                className={`tab ${activeTab === 1 ? styles.activeTab : styles.noactiveTab}`}
                                onClick={() => handleTabClick(1)}
                            >
                                On-chain Adult
                            </div>
                            <div
                                className={`tab ${activeTab === 2 ? styles.activeTab : styles.noactiveTab}`}
                                onClick={() => handleTabClick(2)}
                            >
                                Off-chain Adult
                            </div>
                        </div>
                        <div className={styles.postbountynowallet__tabcontent}>
                        {isApplied ? (
                                <div className={styles.postbountynowallet__thankmessage}>
                                    <h3>Thanks you for your 
                                    bounty request!</h3>
                                </div>
                            ) : (
                                activeTab === 1 ? (
                                    <>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Project Name:</span>
                                                <input placeholder="My project" />
                                            </div>
                                            <div>
                                                <span>Blockchain:</span>
                                                <input placeholder="Ethereum,BSC,etc" />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__description}>
                                            <span>Description:</span>
                                            <textarea placeholder="Describe your project as well your audit needs" />
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Github Repository Link:</span>
                                                <input placeholder="https://github.com/my-project" />
                                            </div>
                                            <div>
                                                <span>Website/Documentation:</span>
                                                <input placeholder="https://hyacinth.com" />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Total Line of Code:</span>
                                                <input placeholder="0" />
                                            </div>
                                            <div>
                                                <span>Protocol Logo URL:</span>
                                                <input placeholder="https://i.imgur.com/wvSyWZL.jpeg" />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Smart Contract Address:</span>
                                                <input placeholder="0x043959970x043959970x0439....." />
                                            </div>
                                            <div>
                                                <span>Language of codebase:</span>
                                                <input placeholder="Solidity, Vyper, etc." />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Bounty Amount:</span>
                                                <div className={styles.postbountynowallet__usdinput}>
                                                    <input placeholder="0" />
                                                    <span>USDC</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span>Deadline:</span>
                                                <input type="date" placeholder="" />
                                            </div>
                                        </div>
                                        <button onClick={handleApplyNow}>
                                            Apply Now
                                            <Image width={11} height={10} src="/icons/arrow-right.png" />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.postbountynowallet__project}>
                                            <span>Project Name:</span>
                                            <input placeholder="My project" />
                                        </div>
                                        <div className={styles.postbountynowallet__description}>
                                            <span>Description:</span>
                                            <textarea placeholder="Describe your project as well your audit needs" />
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Github Repository Link:</span>
                                                <input placeholder="https://github.com/my-project" />
                                            </div>
                                            <div>
                                                <span>Website/Documentation:</span>
                                                <input placeholder="https://hyacinth.com" />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Total Line of Code:</span>
                                                <input placeholder="0" />
                                            </div>
                                            <div>
                                                <span>Protocol Logo URL:</span>
                                                <input placeholder="https://i.imgur.com/wvSyWZL.jpeg" />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Smart Contract Address:</span>
                                                <input placeholder="0x043959970x043959970x0439....." />
                                            </div>
                                            <div>
                                                <span>Language of codebase:</span>
                                                <input placeholder="Solidity, Vyper, etc." />
                                            </div>
                                        </div>
                                        <div className={styles.postbountynowallet__doubleinput}>
                                            <div>
                                                <span>Bounty Amount:</span>
                                                <div className={styles.postbountynowallet__usdinput}>
                                                    <input placeholder="0" />
                                                    <span>USDC</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span>Deadline:</span>
                                                <input type="date" placeholder="" />
                                            </div>
                                        </div>
                                        <button onClick={handleApplyNow}>
                                            Apply Now
                                            <Image width={11} height={10} src="/icons/arrow-right.png" />
                                        </button>
                                    </>
                                )
                            )}
                        </div>
                    </div>
                    <Image width={100} height={100} src="/degrade-type2.png" className={styles.postbountynowallet__gradientcontainer}/>
                </div>
            </div>
        </>
    );
}