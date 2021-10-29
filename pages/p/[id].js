import React from "react";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";

export default function Page({ data }) {
  const { post } = data;

  return (
    <div className="container mx-auto px-4 my-12" id="content">
      <h2 className="mx-auto mt-4 mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-xl title-font">
        {post.title}
      </h2>
      <div
        className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "
        dangerouslySetInnerHTML={{ __html: post.content || "No content" }}
      ></div>
      <br />
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const result = await client.query({
    query: gql`
      query GetPost($id: ID!) {
        post(id: $id) {
          id
          categories {
            nodes {
              categoryId
              name
              slug
            }
          }
          title(format: RENDERED)
          content(format: RENDERED)
          featuredImage {
            node {
              mediaDetails {
                height
                width
              }
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    `,

    variables: { id: params.id },
  });

  return {
    props: { data: result.data },
  };
}

export async function getStaticPaths() {
  const paths = await client.query({
    query: gql`
      query MyQuery {
        posts {
          nodes {
            id
          }
        }
      }
    `,
  });

  return {
    paths: paths.data.posts.nodes.map((path) => ({
      params: { id: path.id },
    })),
    fallback: true,
  };
}
