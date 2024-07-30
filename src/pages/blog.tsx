import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState();

  //   useEffect(() => {
  //     fetchBlogPosts();
  //   }, []);

  return (
    <Layout title="Blog">
      <p>The most recent news from my shop.</p>
      {blogPosts}
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
