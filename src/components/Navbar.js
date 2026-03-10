import React, { Component } from 'react'
import{Link} from "react-router-dom"

export class Navbar extends Component {
  render() {
    return (
      <><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid my-2">
      <Link className="navbar-brand" to="/">NEWS_LAB</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse container mx-2" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item me-3">
            <Link className="nav-Link " aria-current="page" to="/"style={{ textDecoration: "none", color: "black" }}>Home</Link>
          </li>
        <li className="nav-item me-3"><Link className="nav-Link "  to="/sports"style={{ textDecoration: "none", color: "black" }}> Sports</Link></li>
        <li className="nav-item me-3"><Link className="nav-Link " to="/entertainment"style={{ textDecoration: "none", color: "black" }}> Entertainment</Link></li>
        <li className="nav-item me-3"><Link className="nav-Link "  to="/business"style={{ textDecoration: "none", color: "black" }}> Business</Link></li>
        <li className="nav-item me-3"><Link className="nav-Link "  to="/science"style={{ textDecoration: "none", color: "black" }}> Science</Link></li>
        <li className="nav-item me-3"><Link className="nav-Link "  to="/technology"style={{ textDecoration: "none", color: "black" }}> Technology</Link></li>
        <li className="nav-item me-3"><Link className="nav-Link "  to="/health"style={{ textDecoration: "none", color: "black" }}> Health</Link></li>
        <li className="nav-item me-3"><Link className="nav-Link "  to="/general"style={{ textDecoration: "none", color: "black" }}> General</Link></li>

        </ul>
       
      </div>
    </div>
  </nav>
  </>
    )
  }
}

export default Navbar
