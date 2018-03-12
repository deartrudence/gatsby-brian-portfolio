import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => (
  <div className="about-page">
  <Header menuItem="Work" menuLink="/" />
    <h1>Profile</h1>
    <p className="about-description">Heterosis is a three-dimensional typeface made from plexiglas and transparent elastic. The typeface is informed by a rigorous distillation of ideas relating to the representation of mixed-race identity. Cultural theorist Homi Bhabha asserts that cultural hybridity produces a “third space” where previously unimaginable possibilities exist. These three-dimensional letters form in the middle space between two, essentially, one-dimensional vectors situated on parallel, opposing planes. The result is a kinetic alphabet that occupies the third and fourth dimensions.</p>
    <div className="wrapper-grid">
      <div className="project-tile">
        <p className="bold">Services</p>
        <p>Print</p>
        <p>Branding</p>
        <p>Motion</p>
        <p>Web</p>
        <p>Product</p>
        <p>Interaction</p>
        <p>Mixed Reality</p>
      </div>
      <div className="project-tile">
        <p className="bold">Recognition</p>
        <p>Print</p>
        <p>Branding</p>
        <p>Motion</p>
        <p>Web</p>
        <p>Product</p>
        <p>Interaction</p>
        <p>Mixed Reality</p>
      </div>
      <div className="project-tile">
        <p className="bold">Experience</p>
        <p>frog -- New York</p>
        <p>Pentagram -- New York</p>
        <p>Sid Lee -- Toronto</p>
        <p>The Office of Gilbert Li</p>
        <p>Underline Studio</p>
      </div>
      <div className="project-tile">
        <p className="bold">Selected Clients</p>
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
