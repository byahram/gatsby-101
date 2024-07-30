import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { graphql, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  console.log(data);

  //   const [blogPosts, setBlogPosts] = useState();
  //   useEffect(() => {
  //     fetchBlogPosts();
  //   }, []);

  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
