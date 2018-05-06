import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import SuisseBPIntl from "./fonts/SuisseBPIntl-Medium.otf";
import SuisseBPSerif from "./fonts/SuisseBPSerif.otf";
import './font-face.css'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Brian Banton"
      meta={[
        { name: 'description', content: 'design' },
        { name: 'keywords', content: 'design' },
      ]}
      
    />
    <div className="wrapper">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
