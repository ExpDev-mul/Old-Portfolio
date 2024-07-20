import React, { useState } from 'react'
import styles from './Feedbacks.module.css'
import leftArrow from '../assets/bxs-caret-left-circle.svg'
import rightArrow from '../assets/bxs-caret-right-circle.svg'

const feedbacks = [
    ["TM951", "Owner of a group with 140k+ members.", "He was very dedicated to the job, made all the revisions we wanted and better, 100% recommend"],
    ["FrootLoopsPoptart", "Creator of a game with 6.3k concurrent players at the time of writing, with over 20M+ visits", "I want to mention the quality of the code and how fast you did it. One of the best coders I ever hired"]
]

export default function Feedbacks({title, content}){
    const [feedbackIndex, setFeedbackIndex] = useState(0)

    const next = function(){
        if (feedbackIndex >= feedbacks.length - 1){
            setFeedbackIndex(0)
        } else {
            setFeedbackIndex(feedbackIndex + 1)
        }
    }

    const prev = function(){
        if (feedbackIndex <= 0){
            setFeedbackIndex(feedbacks.length - 1)
        } else {
            setFeedbackIndex(feedbackIndex - 1)
        }
    }

    return(
        <div className={styles.container}>
            <button onClick={next} className={styles.left_arrow} style={{backgroundImage: `url(${leftArrow})`}}></button>
            <button onClick={prev} className={styles.right_arrow} style={{backgroundImage: `url(${rightArrow})`}}></button>
            <h3 className={styles.title}>{feedbacks[feedbackIndex][0]}</h3>
            <h4 className={styles.information}>{feedbacks[feedbackIndex][1]}</h4>
            <h3 className={styles.content}>{feedbacks[feedbackIndex][2]}</h3>
        </div>
    );
}