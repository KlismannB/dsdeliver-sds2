import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
     return (
         <nav className="main-navbar">
             <Logo></Logo>
             <Link to="/" href="home" className="logo-text">DS Delivery</Link>
         </nav>
     )
}

export default NavBar;