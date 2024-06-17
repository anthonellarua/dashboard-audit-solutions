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
                        <div>
                            <div>
                                <input placeholder="Search"/>
                                <Image width={24} height={24} src="/icons/search-icon.png"/>
                            </div>
                            <CustomSelect options={options} placeholder="Experience"/>
                            <CustomSelect options={options} placeholder="Specialty"/>
                            <CustomSelect options={options} placeholder="Rates"/>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}