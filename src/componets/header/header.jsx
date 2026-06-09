import style from './header.module.css'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <header className={style.header}>
            <h2>Programacion integrativa de componentes web</h2>
            <nav className={style.headerNav}>
                <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="/nosotros">Nosotros</NavLink>
                <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="/personajes">Personajes</NavLink>
                <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="/teams">Teams</NavLink>
                <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="/contactos">Contact</NavLink>
            </nav>
        </header>
    )
}
