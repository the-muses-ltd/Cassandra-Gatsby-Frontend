import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from "../../Assets/Comp-1_1.gif"

const Header = ({ siteTitle }) => (
  <div className="viewport">

    <div className="viewport-top">
      {/* The main header section on top of the screen */}
      <header className="site-head" style={{"background-image": `url(${BackgroundImage})`}}>
          <div className="container">
              <div className="site-mast">
                  <div className="site-mast-left">
                      <Link to="/">
                              <img className="site-logo" src="https://drive.google.com/thumbnail?id=12bRPdn9nBj6q6lnAZSfQF_4RQGaoJTh6" alt={"Cassandra"} /> 
                      </Link>
                  </div>
                  <div className="site-mast-right">
                      {/* { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                      { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                      <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a> */}
                  </div>
              </div>
              {/* { isHome ?
                  <div className="site-banner">
                      <h1 className="site-banner-title">Cassandra</h1>
                      <p className="site-banner-desc">Everyone deserves equal access to education, get your access here.</p>
                  </div> :
                  null} */}
                  <div className="site-banner">
                      <h1 className="site-banner-title">Cassandra</h1>
                      <p className="site-banner-desc">Everyone deserves equal access to education, get your access here.</p>
                  </div> 
              <nav className="site-nav">
                  <div className="site-nav-left">

                      {/* <Navigation data={site.navigation} navClass="site-nav-item" /> */}

                      <Link className="site-nav-button" to="/page-2/">All Resources</Link> <br />
                  </div>
                  <div className="site-nav-right">
                      <Link className="site-nav-button" to="/about">About</Link>
                  </div>
              </nav>
          </div>
      </header>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
