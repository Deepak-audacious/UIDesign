import React, { useState } from 'react'
import style from './style.module.css'
const userData = [
  {
    title: "Lelah Nichols",
    imges: "./images/prachi.jpg",
    name: "Troy, MI",
    buttons:""
  },
  {
    title: "Jesus Weiss",
    imges: "./images/second.jpeg",
    name: "Fort Worth, TX"
  },
  {
    title: "Annie Rice",
    imges: "./images/third.jpeg",
    name: "Austin, TX"
  },
  {
    title: "Robert Brower",
    imges: "./images/fourth.jpeg",
    name: "Cincinet, OH"
  },
  {
    title: "Amy Campbell",
    imges: "./images/fiveth.jpeg",
    name: "Worrior, AI"
  },
  {
    title: "Anthony S. Morin",
    imges: "./images/sixth.jpeg",
    name: "Lyndenst, Nu"
  }
]




const Cards = () => {
  const [userInfo, setUserInfo] = useState(userData)
  console.log(userInfo)
  return (
    <>
    <section className={style.section}>
    <div className={style.contain}>
      <h1 className={style.heading1}>How does it Works</h1>
      <div className="row  distance">
        {userInfo.map((curElem) => {
          const { title, imges, name} = curElem;
          return (
            <>
              <div className="col-12 col-lg-4 text-center mt-4">
                <img className={style.img} src={imges}/>
                <h5 className="sub-heading">{title}</h5>
                <p className="main-hero-para w-200">{name}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  </section>
    </>
  )
}

export default Cards

