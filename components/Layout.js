"use client"
// NextJS Components
import Head from "next/head";
import Link from "next/link";

// Styles
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

// Custom Components
import Footer from "./Footer";
import Header from "./Header";

export const siteTitle = "Elio Photography";
export const siteDescription = "Elio Gerges Photography Blog";

export default function Layout({ children, home, contact }) {
  return (
    <div className={styles.container + " bg-sky-100"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content={siteDescription}
        />
      </Head>

      <Header />
      <main>{children}</main>
      {!home && /* If page is not home */
       !contact && /* nor contact */
      ( /* Render Link to go back home */
        <div className={styles.backToHome}>
          <Link href="/">
            {/* <a> */}
            ← Go Back
            {/* </a> */}
          </Link>
        </div>
      )}
      <div className={styles.footerBasic}>
        <Footer />
      </div>
    </div>
  );
}
