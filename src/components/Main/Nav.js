import { Link } from 'react-router-dom';
import BasketList from '../Basket/BasketList';


export default function Nav() {
    return (
        <nav>
          <div>
            <Link to="/">Главная</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">О нас</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/login">Авторизация</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/contacts">Контакты</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/lorem">Lorem</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/category">Category</Link>&nbsp;&nbsp;&nbsp;
          </div>
          <BasketList/>
        </nav>
    )
} 