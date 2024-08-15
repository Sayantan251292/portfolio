"use client";
import React from "react";
import styles from './home.module.css';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function LandingPage() {
    return (
        <div className={`container-fluid mt-2 ${styles.home}`}>
            <div className={`row w-100 h-100 `}>
            <div className={`${styles.center_container}`}>
            <div className={`${styles.text}`}>
                <h1 className={`${styles.tilt}`}> - Sayantan Basu - </h1>
            </div>
            <div className={`${styles.text_roboto} mt-4 ${styles.white} ${styles.font_16px}`}>
                <h3>
                    <span className={`${styles.font_16px}`}>
                        I am a 
                    <span className={styles.left_margin}><Typewriter 
                        words={['Full-Stack Developer', 'Front-End Developer', 'Backend-Developer', 'MERN Stack Developer', 'PERN Stack Developer']}
                        loop={0}
                        cursor={true}
                        cursorBlinking={true}
                    /></span>
                    </span>
                    </h3>
            </div>
            <div className={`${styles.socials} mt-2`}>
                <div>
                <a href="https://twitter.com/SayantanBasu251" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} className={styles.white} />
                </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/sayantan-basu-73ab4a92/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.white} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Sbasu2512" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className={styles.white} />
                    </a>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}