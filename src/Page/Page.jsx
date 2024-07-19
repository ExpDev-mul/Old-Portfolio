import React, {useEffect, useState} from 'react'
import styles from './Page.module.css'

export default function Page({index, backgroundColor, children}){
    const [appeared, setAppeared] = useState(false)
    const style = {
        backgroundColor: backgroundColor,
    }

    useEffect(() => {
        function handleOnScroll(){
            const currentPage = Math.floor((window.scrollY + window.innerHeight)/(700 + 350))
            if (currentPage >= index){
                if (!appeared){
                    setAppeared(true)
                    window.removeEventListener("scroll", handleOnScroll)
                }
            }
        }

        handleOnScroll()
        window.addEventListener("scroll", handleOnScroll)
        return () => {
            window.removeEventListener("scroll", handleOnScroll)
        }
    }, [])

    return (
        <div className={styles.container} style={{animation: appeared ? `${styles.appear} 0.8s ease-in-out forwards` : ""}}>
            {children}
        </div>
    );
}
