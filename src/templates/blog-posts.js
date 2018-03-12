import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import './blog-post.css'
import nextArrow from '../assets/next-arrow.png'
import Header from '../components/Header'

class BlogPost extends Component {
	render(){
		const { next } = this.props.pathContext;
		const {title} = this.props.data.contentfulPhotoGallery
		const {slug} = this.props.data.contentfulPhotoGallery
		const { description  } = this.props.data.contentfulPhotoGallery
		const {creatives} = this.props.data.contentfulPhotoGallery
		const {designers} = this.props.data.contentfulPhotoGallery
		const {images} = this.props.data.contentfulPhotoGallery
		const {heroImage} = this.props.data.contentfulPhotoGallery
		return (
			<div>
				<Header menuItem={title.title} menuLink="/" close={true}/>
				{heroImage ? 
					<img src={heroImage.file.url} alt=""/> : null
				}
				<div className="info">
					<div className="credits">
						<p>Creative Direction:</p>
							{creatives &&
									creatives.map(creative => (
										<p>{creative}</p>
									))
								}
						<p>Designers:</p>
						{designers && 
								designers.map(designer => (
									<p>{designer}</p>
								))
							}
					</div> 
					<div className="description">
						<h3>{title.title}</h3>
						{ description ? 
							<p>{description.description}</p> : null
						}
					</div>
				</div>

				{images &&
					images.map(image => (
						image.photo && 
							<img key={image.id} src={image.photo.file.url} alt=""/>
					
				) )}
				{next.node &&
					<Link
					to={next.node.slug}
					className="next-area"
					>
					<div className="next">
						<p>Next Project</p>
						<h3>{next.node.title.title}</h3>
					</div>
					<img src={nextArrow} alt=""/>
					</Link>

				}
			</div>
		)
	}
}

BlogPost.propTypes = {
	data: PropTypes.object.isRequired,
	// pathContext: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
	query blogPostQuery($slug: String!){
		contentfulPhotoGallery(slug: { eq: $slug }){
			slug
			heroImage{
				file {
					url
				}
			}
			title {
				id
				title
			}
			description {
				id
				description
			}
			images {
				id
				photo {
					file {
						url
					}
				}
			}
		}
	} `