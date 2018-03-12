import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import './index.css'
import Header from '../components/Header'

const BlogPost = ({node}) => {
  return (
    <div key={node.id} className="project-tile">
      <Link
        to={node.slug}
      >
      <div className="project-tile-image">
        <img src={node.coverImage.file.url} alt="" />
      </div>
      <p className="title">{node.title.title}</p>
      {node.subtext ?
        <p className="subtext">{node.subtext.subtext}</p> : null
      }
      </Link>
    </div>
  )

}
const IndexPage = ({data}) => (
  <div>
    <Header menuItem="About"menuLink="/about" />
    <h1>Inter– <br/> disciplinary <br/> designer <br/> & director.</h1>
    <p className="select-projects">Selected Projects</p>
    <div id="indexPage" className="wrapper-grid">
      {data.allContentfulPhotoGallery.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} /> )}
    </div>
    <Footer />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allContentfulPhotoGallery {
      edges {
        node {
          id
          slug
          subtext {
            id
            subtext
          }
          title{
            title
          }
          coverImage{
            file{
              url
            }
          }
          images {
            id
            photo {
              id
              description
              file {
                url
                fileName
                contentType
              }
              
            }
          }
        }
      }			
    }
  }
`

