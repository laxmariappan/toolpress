import "tailwindcss/tailwind.css";
import Tool from "../components/Tool";
import Search from "../components/SearchInput";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import React from "react";

import { useSearchInput } from "../hooks/useSearchInput";

export default function Home({ posts }) {
  const { keyword, handleChange } = useSearchInput();

  const filteredPosts = posts.filter((post) =>
    post.node.title?.toLowerCase().includes(keyword?.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto px-4" id="content">
        <section className="text-blueGray-700 ">
          <div className="container items-center px-5 py-8 mx-auto lg:px-24">
            <Search keyword={keyword} handleChange={handleChange} />

            <div className="flex flex-wrap mb-12 text-left">
              {filteredPosts.map((post) => {
                return (
                  <Tool
                    key={post.node.id}
                    name={post.node.title}
                    image={post.node.featuredImage}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query MyQuery {
        posts {
          edges {
            node {
              id
              categories {
                edges {
                  node {
                    categoryId
                    name
                    slug
                  }
                }
              }
              title(format: RENDERED)
              featuredImage {
                node {
                  mediaDetails {
                    file
                    height
                    width
                  }
                  sourceUrl(size: LARGE)
                }
              }
            }
          }
        }
      }
    `,
  });
  // console.log(result.data.posts.edges);
  return {
    props: {
      posts: result.data.posts.edges,
    },
  };
}
