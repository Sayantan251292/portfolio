import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <div className={`${styles.nav} mx-2 ${styles.nav_text}`}>
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
            <div>Resume</div>
        </div>
    )
}