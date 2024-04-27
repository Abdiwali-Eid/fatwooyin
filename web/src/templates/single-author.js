import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import BlogGrid from '../components/blog/BlogGrid';
import MyPortableText from '../components/MyPortableText';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { Title } from '../components/typography/Title';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles';
import { socialLinks } from '../constants/socialLinks';
import { socialLinks2 } from '../constants/socialLinks2';

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
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
      }
    }
  }
`;

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;

  // Determine which set of social links to render based on author name
  const socialLinksToRender =
    author.name === 'Dr Khadar Xasan Axmad'
      ? socialLinks
      : author.name === 'Sh Maxamed Cabdi Umal'
      ? socialLinks2
      : [];

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.profileImage.alt}
              className="profileImage"
            />
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <MyPortableText value={author._rawBio} />
            </div>
            <ul className="footer__socialList">
              {socialLinksToRender.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="hr" />
          <BlogGrid blogs={blogs} />
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;
