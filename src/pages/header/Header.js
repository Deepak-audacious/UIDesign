import React from 'react'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
    <div className={style.icon}>
    <input className={style.input} type="text" placeholder="Search"/>
    <FontAwesomeIcon icon={faSearch} />
    </div>
      <nav className={style.nav}>
        <ul>
          <li><a href="#" class="active">Reputation</a></li>
          <li><a href="#">New Users</a></li>
          <li><a href="#">Voters</a></li>
          <li><a href="#">Editors</a></li>
          <li><a href="#">Moderator</a></li>

        </ul>
      </nav>
    </>
  )
}

export default Header
