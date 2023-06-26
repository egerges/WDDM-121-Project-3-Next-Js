"use client";
// NextJS Components
import Head from "next/head";

// Styles
import utilStyles from "../styles/utils.module.css";

// Custom Components
import Layout, { siteTitle } from "../components/Layout";
import BlogPostPreview from "../components/BlogPostPreview";
import { getAllPosts } from "../lib/posts";

const max = 15;

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className="font-serif text-sky-600">Who is Elio?</p>
        <p className="font-mono text-sky-400">
          Elio Gerges is a photographer and software developer based in Toronto,
          ON.
          <br />
          He shoots a diverse range of subjects, all with a clean and elegant
          aesthetic.
          <br />
          Here are some of his work.
          <br />
          <br />
        </p>

        <div className={utilStyles.posts}>{getBlogPostPreviewData()}</div>
      </section>
    </Layout>
  );
}

const getBlogPostPreviewData = () => {
  const posts = [];
  getAllPosts().forEach((post) => {
    posts.push(<BlogPostPreview key={post.id} data={post} />);
  });

  return posts;
};
