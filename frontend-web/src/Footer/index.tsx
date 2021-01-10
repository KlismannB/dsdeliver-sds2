import './styles.css';
import { ReactComponent as Instagram} from './instagram.svg'
import { ReactComponent as LinkedIn} from './linkedin.svg'
import { ReactComponent as Youtube} from './youtube.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="Youtube" target="_new">
                    <Youtube></Youtube>
                </a>
                <a href="LinkedIn" target="_new">
                    <LinkedIn></LinkedIn>
                </a>
                <a href="Instagram" target="_new">
                    <Instagram></Instagram>
                </a>
            </div>
        </footer>
    )
}

export default Footer;