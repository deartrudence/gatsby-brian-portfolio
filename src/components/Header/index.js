import React, { Component } from 'react';
import Link from 'gatsby-link'
import close_icon from '../../assets/close.svg'
import './index.css'

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.enterSocial = this.enterSocial.bind(this);
    this.leaveSocial = this.leaveSocial.bind(this);
    this.state = {
      social_classes: "hidden"
      }
    }
  
    enterSocial = () => {
      this.setState({social_classes: ""})
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
          >
          { this.props.close ?
            <Link to="/" className="close">
              <p><img src={close_icon} alt=""/>Close</p>
            </Link>
            :
            <div>
              Social
              <ul className={this.state.social_classes}>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Vimeo</a></li>
                <li><a href="#">Tumbler</a></li>
                <li><a href="#">LinkedIn</a></li>
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
