import { Card, Typography } from "antd";
import Button from "antd/lib/button/button";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getSortedPosts } from "../../lib/posts";

const BlogIndex = ({ allPostsData }) => {
   return (
      <Layout>
         <div>
            <h2>My Blog</h2>
            {allPostsData.map(({ slug, date, title, excerpt }) => (
               <Card
                  size="small"
                  style={{ margin: "1rem" }}
                  hoverable={true}
                  key={slug}
               >
                  <Typography.Title level={3}>{title}</Typography.Title>
                  <Typography.Paragraph>{excerpt}</Typography.Paragraph>
                  <small>{date}</small>
                  <br />
                  <br />
                  <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                     <a>
                        <Button type="primary">Read</Button>
                     </a>
                  </Link>
               </Card>
            ))}
         </div>
      </Layout>
   );
};
export default BlogIndex;

export async function getStaticProps() {
   const allPostsData = getSortedPosts();
   return {
      props: {
         allPostsData,
      },
   };
}
