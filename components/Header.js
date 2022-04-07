// NextJS Components
import Link from "next/link";

// Styles
import styles from "./layout.module.css";

export default function Header() {
    return (
      <header className={styles.header + " antialiased"}>
          <div className={styles.titleBox}>
            <h1 className={styles.title + " text-5xl font-serif text-sky-500"}>Elio Gerges</h1>
            <h3 className={styles.subTitle + " text-3xl font-mono text-sky-200"}>Photography</h3>
          </div>
          <div className={styles.navLinks}>
            <Link href="/">
                <a className={styles.NavLinkItem + " no-underline hover:overline text-sky-300 hover:text-sky-500 hover:decoration-sky-200"}>Home</a>
            </Link>
            <Link href="/contact">
                <a className={styles.NavLinkItem + " no-underline hover:overline text-sky-300 hover:text-sky-500 hover:decoration-sky-200"}>Contact</a>
            </Link>
          </div>
      </header>
    );
  }