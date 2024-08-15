"use client";
import React, { useState } from "react";
import styles from './project.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import info from '../../../info.json';

export default function Project() {

    const [projectDetails, setProjectDetails] = useState(info.projects);

    // console.log(projectDetails)

    return (
        <div>
           <div className={`${styles.center_div}`}>
           <h1 className="mt-4">
            <span>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <span className={`${styles.roboto_bold} ${styles.left_margin}`}>
              Projects
            </span>
          </h1>
           </div>
           <div className={`${styles.center_div} mt-3`}>
                <div className={styles.collage}>
                    {
                        projectDetails && projectDetails.map((deets,i)=>(
                            <div key={i} className={styles.animated_box}>
                                <img src={deets.image_url} alt={deets.project_name} className={`${styles.card_img}`}/>
                            </div>
                        ))
                    }
                </div>
           </div>
        </div>
    )
}