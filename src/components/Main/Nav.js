import { NavLink } from 'react-router-dom';
import BasketList from '../Basket/BasketList';
import './Nav.css'


export default function Nav() {
    return (
        <nav>
          <div className='nav'> 
              <NavLink className="link" to="/">Главная</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className="link" to="/about">О нас</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className="link" to="/login">Авторизация</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink className="link" to="/contacts">Контакты</NavLink>
          </div>
          <BasketList/>
        </nav>
    )
}
