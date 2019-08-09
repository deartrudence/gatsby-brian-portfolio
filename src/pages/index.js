import React from 'react'
import ReactPlayer from 'react-player';
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Cover = () => (
  <div className="cover-page">
    <Header menuItem="Work" menuLink="/work" />
    {/* <h1 className="desktop-only">Profile</h1>
		<h1 className="mobile-only">Inter– <br /> disciplinary <br /> designer <br /> & director.</h1>
		<p className="about-description">A multidisciplinary designer, </p> */}
    <div className="wrapper-grid">
      <div className="player-wrapper">
        <ReactPlayer
          url={`https://vimeo.com/350627945`}
          playing
          loop
          config={{
            vimeo: {
              playerOptions: { autoplay: true, setVolume: 0 }
            }
          }}
          className='react-player'
          width='100%'
          height='100%' />

      </div>




    </div>
    <Footer />
  </div>
)

export default Cover
