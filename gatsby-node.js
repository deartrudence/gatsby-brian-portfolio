const path = require('path')
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({graphql, boundActionCreators}) => {
	const {createPage} = boundActionCreators
	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blog-posts.js')
		// const tagPageTemplate = path.resolve('src/templates/tags.js')
		// const personPageTemplate = path.resolve('src/templates/people.js')
		resolve(
			graphql(`
			{
				allContentfulPhotoGallery {
					edges {
						node {
							id
							slug
							title {
								id
								title
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
						next{
							id
							slug
							title {
								id
								title
							}
						}
					}
				}
			} `).then((result) => {
				if(result.errors){
					alert(result.error)
					reject(result.errors)
				}
				createPaginatedPages({
					edges: result.data.allContentfulPhotoGallery.edges,
					createPage: createPage,
					pageTemplate: "src/templates/index.js",
					pageLength: 5,
					pathPrefix: "",
					context: {}
				})
				const tagList = []
				const peopleList = []
				const blogs = result.data.allContentfulPhotoGallery.edges
				result.data.allContentfulPhotoGallery.edges.forEach((edge, index) => {
					const next = index === blogs.length - 1 ? false : blogs[index + 1];
					createPage({
						path: edge.node.slug,
						component: blogPostTemplate,
						context: {
							slug: edge.node.slug,
							next: next
						}
					})
				})
				return
				// tagList.forEach(tag => {
				// 	createPage({
				// 		path: `/tags/${_.kebabCase(tag)}`,
				// 		component: tagPageTemplate,
				// 		context: {
				// 			tag
				// 		}
				// 	})
				// })
				// peopleList.forEach(person => {
				// 	createPage({
				// 		path: `/people/${_.kebabCase(person)}`,
				// 		component: personPageTemplate,
				// 		context: {
				// 			person
				// 		}
				// 	})
				// })
			})
		)
	})
}