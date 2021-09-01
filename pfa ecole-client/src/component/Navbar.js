import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
              <nav>
    <div class="nav-wrapper " >
      <a href="#" class="brand-logo center  ">المدرسة الابتدائية</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/" className="brand-logo center black-text navbar-close" > المدرسة الابتدائية الأمل</Link></li>
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Navbar
