import { NavLink } from 'react-router-dom';
import BasketList from '../Basket/BasketList';
import classes from './Nav.module.css'


export default function Nav() {
    return (
        <nav>
          <div className={classes.nav}> 
              <NavLink className={classes.link} to="/">Главная</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className={classes.link} to="/about">О нас</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className={classes.link} to="/login">Авторизация</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className={classes.link} to="/contacts">Контакты</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className={classes.link} to="/password">Пароль</NavLink>
              <NavLink className={classes.link} to="/lorem">Lorem</NavLink>
          </div>
          <BasketList/>
        </nav>
    )
}
