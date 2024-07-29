import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
          <nav>
            <div class="contained">
                <a href="index.html" class="logo fc-primary ff-damion row flex-alig-center">
                    <span class="fs-h2" style={{fontSize:"33px"}}><span style={{color:"#da1d1d"}}>Lofty</span>Logix</span>
                </a>
                <input type="checkbox" name="tablet-mobile-menu" class="tab-mob-menu" aria-label="tablet and mobile menu"/>
                <div class="navigation-container">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact" class="btn-bg1 border-round">Contact Us</Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar