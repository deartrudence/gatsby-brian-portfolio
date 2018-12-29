import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => (
  <div className="about-page">
  <Header menuItem="Work" menuLink="/" />
    <h1 className="desktop-only">Profile</h1>
    <h1 className="mobile-only">Inter– <br /> disciplinary <br /> designer <br /> & director.</h1>
    <p className="about-description">A multidisciplinary designer, originally from Toronto, Canada, Brian has worked as a senior designer at Pentagram’s New York City office and a principal designer at frog’s Brooklyn office. Before leaving Canada, where he completed Bachelor’s and Master’s Degrees in design, Brian designed award winning books, identity systems, and motion graphics for cultural and non-profit institutions. Currently, he is creating compelling experiences for virtual reality at Oculus VR at Facebook in Menlo Park, California.</p>
    <div className="wrapper-grid">
      <div className="project-tile">
        <p className="about-title">Services</p>
        <p>Print</p>
        <p>Branding</p>
        <p>Motion</p>
        <p>Web</p>
        <p>Product</p>
        <p>Interaction</p>
        <p>Mixed Reality</p>
      </div>
      <div className="project-tile desktop-only">
        <p className="about-title">Recognition</p>
        <p>Print</p>
        <p>Branding</p>
        <p>Motion</p>
        <p>Web</p>
        <p>Product</p>
        <p>Interaction</p>
        <p>Mixed Reality</p>
      </div>
      <div className="project-tile">
        <p className="about-title">Experience</p>
        <p>Oculus VR at Facebook</p>
        <p>frog — New York</p>
        <p>Pentagram — New York</p>
        <p>Sid Lee — Toronto</p>
        <p>The Office of Gilbert Li</p>
        <p>Underline Studio</p>
        <p> Cundari SFP</p>
      </div>
      <div className="project-tile desktop-only">
        <p className="about-title">Selected Clients</p>
        <p>Rockefeller Center</p>
        <p>National Gallery</p>
        <p>Images Festival</p>
        <p>Magenta Foundation</p>
      </div>
    </div>
    <Footer />
  </div>
)

export default About
