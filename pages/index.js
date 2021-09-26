import 'tailwindcss/tailwind.css'
import Tool from '../components/Tool'
import client from "../apollo-client";
import { gql } from '@apollo/client';



export default function Home( {posts} ) {
    return (
           <>
            <div className="container mx-auto px-4" id="content">    
                <section className="text-blueGray-700 ">
                    <div className="container items-center px-5 py-8 mx-auto lg:px-24">        
                      <div className="flex flex-wrap mb-12 text-left">                     
                        {
                            posts.map(post => {                                
                                return (         
                                  <Tool  key={post.node.id} name={post.node.title} image={post.node.featuredImage}/>
                                );
                            })
                        }
                      </div>
                    </div>
                </section>             
            </div>
        </>
    )
  }
  
  export async function getStaticProps() {

    const  result  = await client.query({
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
          posts: result.data.posts.edges
        }
      }
  }