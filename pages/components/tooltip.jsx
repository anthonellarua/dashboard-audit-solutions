// components/Tooltip.js
import React from 'react';
import styles from './tooltip.module.scss';

const Tooltip = ({ children, text }) => {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={styles.tooltiptext}>{text}</span>
        </div>
    );
};

export default Tooltip;
