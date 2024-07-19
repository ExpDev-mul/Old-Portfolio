import { useState } from "react";
import styles from './Row.module.css'

export default function Row({title, content}){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.content}>{content}</h3>
        </div>
    );
}