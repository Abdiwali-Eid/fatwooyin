import React from 'react'
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles'
import { SectionTitle } from '../typography/Title'
import ParagraphText from '../typography/ParagraphText'
import { graphql,useStaticQuery } from 'gatsby'
import AuthorGrid from '../author/AuthorGrid'

const TopAuthors = () => {
  const data= useStaticQuery(graphql `
  {
    allSanityFeatured(filter: {_id: {eq: "featuredItems"}}) {
      nodes {
        author {
          id
          name
          slug {
            current
          }
          profileImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `)
const authors= data.allSanityFeatured.nodes[0].author;

  return (
<>
<SectionTitle style={{'marginTop':40}}>
    Qoraayaasheenna
  </SectionTitle>
<AuthorGrid authors={authors} />
<SectionTitle>
    <p style={{color:'transparent'}}>'</p>
  </SectionTitle>
  
</>
   

    
  )
}

export default TopAuthors