// NextJS Components
import Head from "next/head";
import Image from "next/image";

// Custom Components
import Layout from "../../components/layout";
import { siteTitle } from "../../components/layout";

// Data Manipulator
import { getAllSlugs, getPostBySlug } from "../../lib/posts";

export default function FirstPost(props) {
  const { post } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle + " - " + post.title}</title>
        </Head>

        <h1 className="font-serif text-sky-600">{post.title}</h1>
        <Image 
          className="rounded-lg"
          src={post.url}
          alt={post.alt}
          width={"1920px"}
          height={"1080px"}/>

        <p className="font-mono text-sky-300">{post.description}</p>
      </Layout>
    </>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params }) => {
  const postData = getPostBySlug(params.slug);
  return {
    props: {
      post: postData
    }
  };
}