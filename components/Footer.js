// NextJS Components
import Link from "next/link";

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSnapchat } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
        <div className="social">
          <a href="#"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faSnapchat} className="icon" /></a>
        </div>
        <ul className="list-inline">
            <Link href="/">
                Home
            </Link>
            <Link href="/contact">
               Contact
            </Link>
        </ul>
        <p className="copyright">Elio Gerges Photography © {new Date().getFullYear()}</p>
    </footer>
  );
}