import * as React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Header />

        <div className='Container'>
          <div className='o-wrapper'>
            This is Home page!
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home
