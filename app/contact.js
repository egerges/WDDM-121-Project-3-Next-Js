"use client"
// NextJS Components

import Head from "next/head";

// Custom Components
import Layout, { siteTitle } from "../components/Layout";
import PriceBox from "../components/PriceBox";

// Styles
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout contact>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Contact Us</p>

        {/* Implement Form that leads nowhere :P */}
        <PriceBox />
      </section>
    </Layout>
  );
}
