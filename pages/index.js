import { Typography } from "antd";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Min - Nextjs</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
         </Head>
         <Layout>
            <h3>Hi there, I'm Apisit Amnuayworrabut</h3>
            <Typography.Paragraph>
               I’m currently working on Edtech Startup - Vonder Thailand (2019 -
               Now)
            </Typography.Paragraph>
            <h3>Skills</h3>
            <ul>
               <li>React</li>
               <li>Nextjs </li>
               <li>Vuejs</li>
               <li>Cypress</li>
               <li>Styled Components</li>
               <li>Firebase (firestore, hosting, cloud function)</li>
               <li>Nodejs</li>
               <li>Express</li>
            </ul>
            <h3>CSS Framework</h3>
            <ul>
               <li>Ant Design</li>
               <li>Material Ui</li>
            </ul>
         </Layout>
      </div>
   );
}
