import React, { Component } from 'react';
import Link from 'gatsby-link'
import './index.css'

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.toggleSocial = this.toggleSocial.bind(this);
    this.state = {
      social_classes: "hidden"
      }
    }
  
    toggleSocial = () => {
      if(this.state.social_classes === "hidden"){
        this.setState({social_classes: ""})
      }else {
        this.setState({social_classes: "hidden"})

      }
    }
  render() {
    return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to="/"
        >
          Brian Banton
        </Link>
        <Link
        to="/"
        className="about"
        >
        About
        </Link>
        <div
          className="social"
          onMouseEnter={this.toggleSocial}
          onMouseLeave={this.toggleSocial}
        >
          Social
          <ul className={this.state.social_classes}>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Vimeo</a></li>
            <li><a href="#">Tumbler</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </nav>
)
}
}
export default Header
