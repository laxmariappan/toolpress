
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Tool from '../components/Tool'
import { ApolloClient, InMemoryCache,useQuery, gql } from '@apollo/client';

const MYPOSTS =  gql`
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
`;


const Tracks = () => {
const {loading, error, data} = useQuery(MYPOSTS);
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
return <Layout >{JSON.stringify(data)}</Layout>;
};

export default Tracks;