import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
function Navbar(props){
    return(
      
        < nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      {props.title}
         </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            {props.homeText}
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            {props.aboutText}
          </a>
        </li> */}

        {/* <li className="nav-item">
          <div className="nav-link" href="/">
            
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link" href="/">
            
          <div className="form-check form-check-inline">
  <input className="form-check-input" onClick={props.handelModeChange('light')} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="light" />
  <label className="form-check-label" htmlFor="inlineRadio1">Light</label>
</div>
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link" href="/">
          <div className="form-check form-check-inline">
  <input className="form-check-input" onClick={props.handelModeChange('dark')} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="dark"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Dark</label>
</div>

          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link" href="/">
          <div className="form-check form-check-inline">
  <input className="form-check-input" onClick={props.handelModeChange('blue')} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="blue"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Blue</label>
</div>

          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link" href="/">
          <div className="form-check form-check-inline">
  <input className="form-check-input" onClick={props.handelModeChange('green')} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="green"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Green</label>
</div>

          </div>
        </li>*/}
      </ul> 

      <div className="mx-4 form-check form-switch">
  <input className="form-check-input" onClick={props.handelModeChange} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>



      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        /> 
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div> 
  </div>

</nav>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired,
    homeText : PropTypes.string.isRequired,
    mode : PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : 'NAVBAR',
    aboutText : "About",
    homeText : "Home",
    mode : "light"
};

export default Navbar;