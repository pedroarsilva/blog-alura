import { Link, useLocation } from 'react-router-dom'
import style from './Menu.module.css'
import MenuLink from '../MenuLink'
import logo from 'assets/logo.png';

export default function Menu() {
  
  return (
    <header>
      <nav className={style.navegacao}>
        <img className={style.logo}
          src={logo}
        />
        <MenuLink to="/">
          Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobre Mim
        </MenuLink>
        
      </nav>
    </header>
  )
}