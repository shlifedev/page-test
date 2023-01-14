import scss from './index.module.scss'

import React from 'react'

export default function ChatHeader({
  chatTitle, 
}) {
  return (
    <header className={scss.header}>
      <div className={scss.profile}>
        <img src="https://i.discogs.com/YCopd9B5j4KEu0_mA-L8GirzXpRoHKAFJjDEkntsRTM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyMjYz/MDYtMTU5NzMzMjM5/Mi03MzMwLmpwZWc.jpeg" alt="" />
 
        <img src="https://i.discogs.com/YCopd9B5j4KEu0_mA-L8GirzXpRoHKAFJjDEkntsRTM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyMjYz/MDYtMTU5NzMzMjM5/Mi03MzMwLmpwZWc.jpeg" alt="" />
     
        <h3>Jeccia Tino</h3>
        <p>NAVER</p>
        <div className={scss.space}></div>
      </div>
    </header>
  )
}
