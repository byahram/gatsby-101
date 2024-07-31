import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout title="Welcome to DevStickers">
      <StaticImage
        height={500}
        src="https://plus.unsplash.com/premium_photo-1718146018980-95d9afd69090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Static Image"
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
