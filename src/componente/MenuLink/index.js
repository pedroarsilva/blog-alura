import { Link, NavLink, useLocation } from 'react-router-dom';
import style from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

  // const localizacao = useLocation();

  return (
    <NavLink
      className={({ isActive }) => `
        ${style.link}
        ${isActive ? style.linkDestacado : ""}
      `}
      to={to}
      end
    >
      {children}
    </NavLink>
  )
}