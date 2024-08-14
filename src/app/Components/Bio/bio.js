import React from "react";
import styles from './bio.module.css';

export default function Bio(){
    return (
        <div className={`container-fluid ${styles.white_background} ${styles.h_100pct}`}>
            <div className={`row m-1 ${styles.center_div}`}>
                <div className={styles.center_div}>
                    <h1>
                        <span>
                            About Me!
                        </span>
                    </h1>
                </div>
                <div className={`${styles.left_div} ${styles.flex_col} ${styles.roboto} ${styles.w_80pct} ${styles.pad_3rem}`}>
                    <p>
                        Hi, My name is Sayantan Basu and I am based out of India. I am currently working for Next Semi Private Limited as a Senior Software Engineer.
                    </p>
                    <p>
                    I am a result-oriented Full-Stack Web Developer with nearly three years of hands-on experience in system analysis, conceptual design, software architecture, and development. My expertise spans across web application design, development, testing, and maintenance, complemented by a solid background in quality control, installation, and implementation. With a strong command of both front-end and back-end technologies, I have consistently delivered high-quality, scalable solutions in fast-paced and agile environments.
                    </p>
                    <p>
                    My technical skill set includes proficiency in HTML5, CSS3, JavaScript, TypeScript, ReactJS, NodeJS, and various CSS frameworks like Bootstrap, Ant Design, and Material UI. I possess a deep understanding of the Software Development Life Cycle (SDLC) and have served as a crucial link between Subject Matter Experts (SMEs) and technologists throughout project lifecycles. My experience also extends to version control systems such as Git, GitHub, and GitLab, as well as CI/CD pipelines, ensuring smooth and efficient development processes.
                    </p>
                    <p>
                    I thrive in collaborative settings and am equally comfortable managing tasks independently. My ability to quickly assimilate new technologies and apply them to dynamic IT markets makes me a valuable asset in any development team. With a commitment to excellence, strong analytical abilities, and exceptional communication skills, I am dedicated to delivering innovative solutions that drive success.
                    </p>
                </div>
            </div>
        </div>
    )
}