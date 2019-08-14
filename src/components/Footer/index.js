import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const Footer = () => (
	<footer>
			<div className="address">
				<p className="contact">Contact</p>
				<p>San Francisco Bay Area</p>
				<p>California, USA</p>
				<Link
					to="/" 
				>
				brianbanton@gmail.com
				</Link>
				<Link
					to="mailto:brianbanton@gmail.com"
				>
				+1 347 781 9500
				</Link>
			</div>
			<div className="copyright">
				<p>Copyright </p>
				<p>2018</p>
			</div>
	</footer>
)

export default Footer
