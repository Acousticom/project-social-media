import React from 'react'
import styles from "./Searchbar.module.css"
export const Searchbar = () => {
  return (
    <div>
        <input type='text' placeholder='Search' className={styles.searchbar}/>
    </div>
  )
}
