import { Link } from 'react-router-dom';
import BasketList from '../Basket/BasketList';


export default function Nav() {
    return (
        <nav>
          <div>
            <Link to="/">Главная</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
          </div>
          <BasketList/>
        </nav>
    )
} 