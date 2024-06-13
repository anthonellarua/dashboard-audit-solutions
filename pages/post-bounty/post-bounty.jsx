import styles from "./post-bounty.module.scss"
import Image from "next/image";
import { useState } from "react";

export default function PostBounty() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className={styles.postbountynowallet}>
                <div className={styles.postbountynowallet__container}>
                    <div className={styles.postbountynowallet__titlesection}>
                        <div>
                            <h2>Post a Bounty Request</h2>
                            <p>Fill the form below to post a bounty request for your project.</p>
                        </div>
                        <button>Mint a Protocol NFT<Image width={11} height={10} src="/icons/arrow-right.png" /></button>
                    </div>
                    <div className={styles.postbountynowallet__tabsection}>
                    <div className="tab-container">
                        <div className="tabs">
                        <div
                            className={`tab ${activeTab === 1 ? 'active' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            On-chain Adult
                        </div>
                        <div
                            className={`tab ${activeTab === 2 ? 'active' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Off-chain Adult
                        </div>
                        </div>
                        <div className="tab-content">
                        {activeTab === 1 ? (
                            <>
                            <div>
                                <div>
                                    <span>Project Name:</span>
                                    <input/>
                                </div>
                                <div>
                                    <span>Blockchain:</span>
                                    <input/>
                                </div>
                            </div>
                            <div>
                                <span>Description:</span>
                                <textarea/>
                            </div>
                            </>
                        ) : (
                            <p>Contenido de la pestaña 2</p>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                <Image width={330} height={330} src="/gradient-circle.png" className={styles.postbountynowallet__gradientgeneral}/>
            </div>
        </>
    );
}