import React from 'react'
import {Link} from "react-router-dom";
import { Component } from 'react';
import './Navbar.css'
import admin from '../images/teach.png'
import back from '../images/C.png'

class NavbarEn extends Component {
    
componentDidMount() {
    const M = window.M;
      document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
      
      
      
    }); 
    document.addEventListener('DOMContentLoaded', function() {
        var elem = document.querySelectorAll('.dropdown-trigger');
        var instance = M.Dropdown.init(elem, {
            inDuration: 300,
            outDuration: 225,hover: true,belowOrigin: true,alignment: 'left'});
      }); 
   }

    render(){
    return (
        <div className="navbar ">
        <ul id="dropdown1" class="dropdown-content">
  <li><p className="center">Name</p></li>
  <li class="divider"></li>
  <li><a href="#!" className="center">Login</a></li>
</ul>
            <nav>
    <div class="nav-wrapper ">
    <Link data-target="slide-out" className="sidenav-trigger  show-on-large"><i className="material-icons menu">menu</i></Link>
    <Link to="/HE" className="brand-logo center black-text navbar-close"> المدرسة الابتدائية الأمل</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">

      <li><a class="dropdown-trigger"  href="#!" data-target="dropdown1"><li><img src={admin}alt="" className="topAvatar" /></li></a></li>
      </ul>
    </div>
  </nav>
  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src={back} style={{width:"300px"}}alt=""/>
      </div>
      
      <a href="#user"><img className="circle" src={admin} alt=""/> </a>
      <a href="#name"><span classNameName="white-text name">John Doe</span></a>
      <a href="#email"><span classNameName="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><Link className="waves-effect sidenav-close" to="/HE"><i className="material-icons">business_center</i>إحصائيّات</Link></li>
    <li><div className="divider"></div></li>
    <li><Link className="waves-effect sidenav-close " ><i className="material-icons">edit</i> جدول أوقاتي </Link></li>
    <li><div className="divider"></div></li>
    <li><Link  className="waves-effect sidenav-close" to="/Pr"><i className="material-icons">people</i> الحضور</Link></li>
    <li><div className="divider"></div></li>
    <li><Link className="waves-effect sidenav-close" to='/Etudiant'><i className="material-icons">edit</i>التصرف في التلاميذ</Link></li>
    <li><div className="divider"></div></li>
    <li><Link className="waves-effect sidenav-close" to="/userP"> <i className="material-icons">contact_mail</i>المعلومات الشّخصيّة</Link></li>
    
  </ul>
  
        </div>
    )
}
}

export default NavbarEn 
