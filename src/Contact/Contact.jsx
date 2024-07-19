import { useState } from "react";
import styles from './Contact.module.css'
import linkedin from '../assets/bxl-linkedin-square.svg'
import github from '../assets/bxl-github.svg'

const logos = {
    "linkedin": linkedin,
    "github": github
}

export default function Contact({logo, content, href}){
    const openWindow = () => {
        window.open(href, "_blank", "noopener, noferrer")
    }

    return (
        <div className={styles.container} onClick={openWindow}>
            <img alt="LinkedIn Logo" src={logos[logo]} className={styles.logo}/>
            <p className={styles.content}>{content}</p>
        </div>
    );
}