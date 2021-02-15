import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Head from "next/head";
import Layout from "../../components/Layout";

import { Typography } from "antd";

// const Image = ({ src, alt }) => {
//    return <img src={src} alt={alt} />;
// };

const Image = ({ src, alt }) => {
   return (
      <img
         src={src}
         alt={alt}
         style={{ width: "100%", objectFit: "cover" }}
         height={300}
      />
   );
};

// const components = { MyBackground };

const components = {
   Image: Image,
};

export default function Blogs({ source, frontMatter }) {
   const content = hydrate(source, { components });
   return (
      <>
         <Head>
            <title>{frontMatter.title}</title>
         </Head>
         <Layout>
            <Typography.Title level={1}>{frontMatter.title}</Typography.Title>
            <Typography.Title level={2}>
               {frontMatter.author}
               {" / "}
               <span>{frontMatter.date}</span>
            </Typography.Title>
            <div>{content}</div>
         </Layout>
      </>
   );
}
export async function getStaticPaths() {
   const paths = getAllPostSlugs();
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const postContent = await getPostdata(params.slug);
   const { data, content } = matter(postContent);
   const mdxSource = await renderToString(content, { components, scope: data });
   return {
      props: {
         source: mdxSource,
         frontMatter: data,
      },
   };
}
