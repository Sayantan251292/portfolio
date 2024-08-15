import React from "react";
import styles from './footer.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import next from '../../../../public/next.svg'

export default function Footer() {
    return(
        <div className={`${styles.footer} ${styles.text} ${styles.theme}`}>
            <span >Made By Sayantan with <span className={`${styles.left} ${styles.red}`}> <FavoriteIcon />  </span></span> 
            <span className={`${styles.left}`}> © 2024 All Rights Reserved </span>
        </div>
    )
}