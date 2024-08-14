import React from "react";
import styles from './home.module.css';

export default function LandingPage() {
    return (
        <div className={`container-fluid mt-2 ${styles.home}`}>
            <div className={`row w-100 h-100 `}>
            <div className={`${styles.center_container}`}>
            <div className={`${styles.text}`}>
                <h1 className={`${styles.tilt}`}> - Sayantan Basu - </h1>
            </div>
            <div className={`${styles.text} mt-4`}>
                <h3>Full-Stack Developer</h3>
            </div>
            </div>
            </div>
        </div>
    )
}