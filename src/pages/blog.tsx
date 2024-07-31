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
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h3>{file.frontmatter?.title}</h3>
            <h5>
              {file.frontmatter?.author} in : {file.frontmatter?.category}
            </h5>
            <h6>{file.frontmatter?.date}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          category
          author
          data(formatString: "YYYY.MM.DD")
          title
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
