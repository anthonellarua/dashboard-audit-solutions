import { useState } from 'react';
import styles from "./custom-select.module.scss"
import Image from 'next/image';

export default function CustomSelect({ options, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.selectContainer}>
            <div className={`${styles.selectContainer__select} ${isOpen ? styles.selectContainer__selectOpen : ''}`} onClick={toggleDropdown}>
                {selectedOption ? selectedOption.label : placeholder}
                <Image width={24} height={24} src={isOpen ? "/icons/chevron-up-icon.png": "/icons/chevron-down-icon.png"}/>
            </div>
            {isOpen && (
                <ul className={styles.list}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={styles.list__selected}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}