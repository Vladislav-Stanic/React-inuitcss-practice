import * as React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

class About extends React.PureComponent {
  render() {
    return (
      <div className='About'>
        <Header />

        <div className='Container'>
          <div className='o-wrapper'>
            This is About page!
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default About
