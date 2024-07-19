import React, {useState} from 'react'
import styles from './Languages.module.css'



export default function Languages({languages}){

    const pStyle = {
        color: "white",
        position: "absolute",
        left: 0 + "px",
        top: 0 + "px",
        textAlign: "center"
    }

    const languagesMap = languages.map(
        (value, index) => <p style={pStyle}>{value}</p>
    )
    
    return (
        <div className={styles.container}>
            {languagesMap}
        </div>
    );
}