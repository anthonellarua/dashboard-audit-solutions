import styles from "./a-bounties.module.scss"
import Image from "next/image";
import { useState } from "react";

export default function ABounties() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <>
            <div className={styles.abounties}>
                <div className={styles.abounties__container}>

                    <div>
                        <span className={`tab ${activeTab === 1 ? styles.activeTab : styles.noactiveTab}`}
                            onClick={() => handleTabClick(1)}>Available
                        </span>
                        <span className={`tab ${activeTab === 2 ? styles.activeTab : styles.noactiveTab}`}
                            onClick={() => handleTabClick(2)}>In progress
                        </span>
                        <span className={`tab ${activeTab === 3 ? styles.activeTab : styles.noactiveTab}`}
                            onClick={() => handleTabClick(3)}>Completed
                        </span>
                    </div>
                    {activeTab === 1 ? 
                        (
                            <>
                                <div>
                                    <h2>Available Bounties</h2>
                                    <div>
                                        <div>
                                            <span>Start in X days</span>
                                            <span>Bounty Name</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nunc vitae libero efficitur, ac ornare purus faucibus. Suspendisse id justo neque. Ut massa lorem, ultrices ut eleifend eget, tempor ut libero. Proin id interdum neque, pellentesque </p>
                                        </div>
                                        <div>
                                            <div>
                                                <span>Start Date</span>
                                                <span>11 may 3:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ): activeTab === 2 ?(
                            <>
                            holis 2
                            </>
                        ):(
                            <>
                            holis 3
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}