import React, { Component } from 'react';
import Link from 'gatsby-link'
import close_icon from '../../assets/close.svg'
import './index.css'

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.enterSocial = this.enterSocial.bind(this);
    this.leaveSocial = this.leaveSocial.bind(this);
    this.toggleSocial = this.toggleSocial.bind(this);
    this.state = {
      social_classes: "hidden",
      ex: "trudy"
      }
    }
  
    toggleSocial = () => {

      if (this.state.social_classes === "hidden"){
        this.setState({ social_classes: "" })
      } else {
        this.setState({ social_classes: "hidden" })
      }
      if (this.state.ex === 'ex') {
        this.setState({ ex: '' })
      } else {
        this.setState({ ex: 'ex' })
      }
    }
    enterSocial = () => {
      if(window.innerWidth > 500){
        this.setState({social_classes: ""})
      }
    }
    leaveSocial = () => {
      this.setState({social_classes: "hidden"})
    }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="home-link"
          >
            Brian Banton
          </Link>
          <Link
          to={this.props.menuLink}
          className="about"
          >
          {this.props.menuItem}
          </Link>
          <div
            className="social"
            onMouseEnter={this.enterSocial}
            onMouseLeave={this.leaveSocial}
            onClick={this.toggleSocial}
          >
          { this.props.close ?
            <Link to="/work" className="close">
              <p><img src={close_icon} alt=""/>Close</p>
            </Link>
            :
            <div>
                <p className="desktop-only">Social</p>
                <div className={`${this.state.ex} social-icon mobile-only`}></div>
              <ul className={this.state.social_classes}>
                <li className="about-work mobile-only"><Link to={this.props.menuLink}>{this.props.menuItem}</Link></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="https://vimeo.com/brianbanton" target="_blank">Vimeo</a></li>
                <li><a href="http://finnegan-appelbautum.tumblr.com/" target="_blank">Tumblr</a></li>
                  <li><a href="https://www.linkedin.com/in/bbanton/" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          }
          </div>
        </div>
      </nav>
    )
  }
}
export default Header
