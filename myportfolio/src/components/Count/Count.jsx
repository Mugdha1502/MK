import React from 'react'
import styles from "../Count/Count.module.css"
import {useSelector} from "react"
const Count = () => {
  const state = useSelector(state =>state.amount)
  return (
    
    <section className={styles.container}>
        
        
    <div className={styles.div}>
    
        <button className={styles.btn} type='button' disabled>portfolio visits {amount}</button>
    </div>
    </section>
  )
}

export default Count;