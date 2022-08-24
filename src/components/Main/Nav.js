import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <nav>
          <Link to="/">Главная</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/about">О нас</Link>
        </nav>
    )
} 