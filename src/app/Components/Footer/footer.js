import React from "react";
import styles from './footer.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
    return(
        <div className={`${styles.footer} ${styles.text}`}>
            Made By Sayantan with <span className={`${styles.left} ${styles.red}`}> <FavoriteIcon />  </span>
        </div>
    )
}