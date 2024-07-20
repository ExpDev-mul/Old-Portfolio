import { useState } from "react";
import styles from './Row.module.css'

export default function Row({title, content, period}){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <h4 className={styles.period}>{period}</h4>
            <h3 className={styles.content}>{content}</h3>
        </div>
    );
}