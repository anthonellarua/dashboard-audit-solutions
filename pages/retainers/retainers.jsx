import styles from "./retainers.module.scss"
import Image from "next/image";
import { useState } from "react";
import CustomSelect from "../components/custom-select";

export default function Retainers() {

    //select dropdown
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ];

    return (
        <>
            <div className={styles.retainers}>
                <div className={styles.retainers__container}>
                    <div className={styles.retainers__title}>
                        <h2>Auditor Retainers</h2>
                        <div className={styles.retainers__inputs}>
                            <div className={styles.retainers__searchinput}>
                                <input placeholder="Search"/>
                                <Image width={24} height={24} src="/icons/search-icon.png" className={styles.searchicon}/>
                            </div>
                            <div className={styles.retainers__select}>
                                <CustomSelect options={options} placeholder="Experience"/>
                            </div>
                            <div className={styles.retainers__select}>
                                <CustomSelect options={options} placeholder="Specialty"/>
                            </div>
                            <div className={styles.retainers__select}>
                                <CustomSelect options={options} placeholder="Rates"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.retainers__table}>
                        <div className={styles.retainers__header}>
                            <div className={styles.retainers__position}>
                                <span>Position</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Auditor Name</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Experience</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Speciality</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Bounties</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Cost rate</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Project time</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div className={styles.retainers__headerdiv}>
                                <span>Payment frequency</span>
                                <Image width={8} height={8} src="/icons/arrow-down-red.png"/>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className={styles.retainers__content}>
                            <div className={styles.retainers__row}>
                                <div>
                                    #1
                                </div>
                                <div className={styles.retainers__row__user}>
                                    <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                    Username
                                </div>
                                <div>
                                    1 year
                                </div>
                                <div>
                                    Lorem ipsumLorem
                                </div>
                                <div>
                                    4
                                </div>
                                <div>
                                    $10.00 - 96.000
                                </div>
                                <div>
                                    1 month
                                </div>
                                <div>
                                    once a week
                                </div>
                                <div className={styles.retainers__row__viewprofile}>
                                    View profile
                                </div>
                            </div>
                            <div className={styles.retainers__row}>
                                <div>
                                    #1
                                </div>
                                <div>
                                    <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                    Username
                                </div>
                                <div>
                                    1 year
                                </div>
                                <div>
                                    Lorem ipsumLorem
                                </div>
                                <div>
                                    4
                                </div>
                                <div>
                                    $10.00 - 96.000
                                </div>
                                <div>
                                    1 month
                                </div>
                                <div>
                                    once a week
                                </div>
                                <div className={styles.retainers__row__viewprofile}>
                                    View profile
                                </div>
                            </div>
                            <div className={styles.retainers__row}>
                                <div>
                                    #1
                                </div>
                                <div>
                                    <Image width={24} height={24} src="/icons/user-person-icon.png" alt="Wallet Icon"/>
                                    Username
                                </div>
                                <div>
                                    1 year
                                </div>
                                <div>
                                    Lorem ipsumLorem
                                </div>
                                <div>
                                    4
                                </div>
                                <div>
                                    $10.00 - 96.000
                                </div>
                                <div>
                                    1 month
                                </div>
                                <div>
                                    once a week
                                </div>
                                <div className={styles.retainers__row__viewprofile}>
                                    View profile
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}