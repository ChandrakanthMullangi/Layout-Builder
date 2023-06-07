// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationContainer = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-container">
          <h1 className="heading"> Layout </h1>
          <div className="input-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="left-navbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="right-navbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="right-navbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationContainer
