// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          {/* ----------left-navbar---------- */}
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left-navbar-heading"> Left Navbar Menu</h1>
              <ul className="left-navbar-items">
                <li className="left-navbar-item"> Item 1 </li>
                <li className="left-navbar-item"> Item 2 </li>
                <li className="left-navbar-item"> Item 3 </li>
                <li className="left-navbar-item"> Item 4 </li>
              </ul>
            </div>
          ) : null}
          {/* ----------content---------- */}
          {showContent ? (
            <div className="content">
              <h1 className="content-heading"> Content </h1>
              <p className="content-description">
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {/* ----------right-navbar---------- */}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="right-navbar-heading"> Right Navbar </h1>
              <div className="right-navbar-ad-container">
                <div className="right-navbar-ad">Ad 1</div>
                <div className="right-navbar-ad">Ad 2</div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
