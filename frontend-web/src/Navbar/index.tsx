import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

function NavBar() {
     return (
         <nav className="main-navbar">
             <Logo></Logo>
             <a href="home" className="logo-text">DS Delivery</a>
         </nav>
     )
}

export default NavBar;