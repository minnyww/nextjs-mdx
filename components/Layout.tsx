import { Col, PageHeader } from "antd";
import Link from "next/link";
import { memo, ReactChild, ReactChildren, ReactNode } from "react";

type LayoutProps = {
   children?: ReactChild | ReactChildren | ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
   return (
      <div>
         <Col offset={4} />

         <Col span={16} style={{ margin: "0 auto" }}>
            <PageHeader
               title={
                  <Link href="/" as="/">
                     Hello Min 🐱
                  </Link>
               }
               extra={[
                  <Link key={"blog"} href="/blog" as={`/blog`}>
                     Blogs
                  </Link>,
               ]}
            />
            <div style={{ margin: "24px" }}>{children}</div>
         </Col>
         <Col offset={4} />
      </div>
   );
};

export default memo(Layout);
