import React from "react";
import styles from './footer.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
    return(
        <div className={`${styles.footer} ${styles.text} ${styles.theme} mt-4`}>
            <span >Made with <span className={`${styles.red}`}> <FavoriteIcon />  </span> By Sayantan </span> 
            <span className={`${styles.left}`}>| © 2022 All Rights Reserved </span>
            <span className={`${styles.left}`}>| Powered by <span><img src="/assets/svg/next.svg" className={`${styles.left} ${styles.small_icon}`} /> </span> </span>
        </div>
    )
}