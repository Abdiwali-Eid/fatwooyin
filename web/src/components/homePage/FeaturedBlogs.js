import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import { Badge, Button } from 'react-bootstrap';
import { buttonTypes } from '../../constants/buttonTypes';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: {}) {
        nodes {
          blogs {
            title
            id
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            author {
              name
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  // console.log(data);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  console.log(featuredBlogs);

  return (

    <FeaturedBlogsStyles>
     
      <SectionTitle>Su'aalaha muhiimka ah </SectionTitle>
 
      {/* <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo
        ad provident consectetur quis eaque doloribus et, ducimus earum iste est
        corporis
      </ParagraphText> */}
   
      <BlogGrid blogs={featuredBlogs} />
     {/* Add a Button component at the bottom of the list */}
     {/* <Button
        variant="primary"
        href="/jawaab"
        className="view-more-button"
        style={{ width: '7%', backgroundColor: '#79ade0', textAlign: 'left' }}
      >
        View More
      </Button> */}
        <Button
        as={Link} // Use Link component instead of anchor tag
        to="/jawaab" // Specify the path to navigate to
        variant={buttonTypes.secondary}
        style={{ backgroundColor: '#79ade0', float: 'right' }}
        size="lg" // Large size
      >
        Arag Jawaabaha oo dhan
      </Button>
    </FeaturedBlogsStyles>
  );
} 

export default FeaturedBlogs;
