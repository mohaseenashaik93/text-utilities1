import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Site Name</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                    </ul>
                    <div className="color-palates">
                        <div onClick={() => props.toggleMode('primary')} className="border bg-primary"></div>
                        <div onClick={() => props.toggleMode('light')} className="border bg-light"></div>
                        <div onClick={() => props.toggleMode('success')}  className="border bg-success"></div>
                        <div onClick={() => props.toggleMode('danger')} className="border bg-danger"></div>
                        <div onClick={() => props.toggleMode('dark')} className="border bg-dark"></div>
                        <div onClick={() => props.toggleMode('warning')} className="border bg-warning"></div>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode === 'dark'? 'light' : 'dark'}`} > 
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div> */}
                    </div>
                </div>
            </nav>
        </div>
  )
}
