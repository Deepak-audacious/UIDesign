import React from 'react'
import style from './style.module.css'
import Header from '../header/Header' 
import Card from '../main_container/Card' 


const Context = () => {
  return (
    <>
        <div className={style.container}>
        
          <Header />
          <Card />
        </div> 
    </>
  )
}

export default Context
