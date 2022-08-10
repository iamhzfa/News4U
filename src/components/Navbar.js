import React from "react";
import { Link } from "react-router-dom";

function Navbar (props) {

 
    return (
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  >
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color:props.mode==='light' ? '#0d6efd' : 'whitesmoke', cursor:"pointer"}} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={{color:props.mode==='light' ? '#000' : 'whitesmoke', fontWeight:500}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
            </ul>

            <div className="d-flex justify-content-center align-items-center">
            <div>
            <span className="material-symbols-outlined text-light">light_mode</span>
            </div>
            <div className="form-check form-switch" style={{margin:"0 -9px 6px 0"}}>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                style={{cursor:'pointer'}}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
            <div  style={{marginRight:"15px"}}>
            <span className="material-symbols-outlined" style={{color:props.mode==='light'?'black':'rgb(33 37 41)'}} >dark_mode</span>
            
            </div>
          </div>

          </div>
        </div>
      </nav>
    );
}

export default Navbar;
