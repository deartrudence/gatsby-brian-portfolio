import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostTags from "../components/PostTags";
import PersonCard from "../components/PersonCard";
import Link from 'gatsby-link'
import './blog-post.css'
import nextArrow from '../assets/next-arrow.png'

class BlogPost extends Component {
	render(){
		const { next } = this.props.pathContext;
		console.log(next)
		const {title} = this.props.data.contentfulPhotoGallery
		const { description  } = this.props.data.contentfulPhotoGallery
		const {creatives} = this.props.data.contentfulPhotoGallery
		const {designers} = this.props.data.contentfulPhotoGallery
		const {images} = this.props.data.contentfulPhotoGallery
		// const {id} = this.props.data.contentfulBlogPost
		const {heroImage} = this.props.data.contentfulPhotoGallery
		// const {publishDate} = this.props.data.contentfulBlogPost
		// const {size} = this.props.data.contentfulBlogPost
		// let image_classes = `image individual + ${size}`
		return (
			<div>
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
					<img src={image.photo.file.url} alt=""/>
					
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