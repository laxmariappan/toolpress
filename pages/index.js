import Tool from "../components/Tool";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import React from "react";

import { SearchInput, SelectFilter } from "../components";
import { useSearchInput, useDropdown } from "../hooks";

export default function Home({ posts, categories }) {
  const { keyword, handleChange } = useSearchInput();
  const { selected: selectedCategory, handleSelectChange } = useDropdown();

  let filteredPosts = posts.filter((post) => {
    let filterResults = [];

    if (keyword) {
      filterResults.push(
        !!post.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (selectedCategory) {
      filterResults.push(
        !!post.categories.nodes.find(
          (category) => category.categoryId === +selectedCategory
        )
      );
    }

    return filterResults.every((result) => result === true);
  });

  return (
    <>
      <div className="container mx-auto px-4" id="content">
        <section className="text-blueGray-700 ">
          <div className="container items-center px-5 py-8 mx-auto lg:px-24">
            <SearchInput keyword={keyword} handleChange={handleChange} />
            <SelectFilter
              categories={categories}
              handleSelectChange={handleSelectChange}
            />

            <div className="flex flex-wrap mb-12 text-left">
              {filteredPosts.map((post) => {
                return (
                  <Tool
                    key={post.id}
                    name={post.title}
                    image={post.featuredImage}
                    id={post.id}
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
          nodes {
            id
            categories {
              nodes {
                categoryId
                name
                slug
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
        categories {
          nodes {
            categoryId
            name
          }
        }
      }
    `,
  });
  // console.log(result.data.posts.edges);
  return {
    props: {
      posts: result.data.posts.nodes,
      categories: result.data.categories.nodes,
    },
  };
}
