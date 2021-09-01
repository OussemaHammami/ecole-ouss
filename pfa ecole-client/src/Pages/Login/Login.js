import React from 'react'
import img from '../../images/try.png'
import back from '../../images/A.jpeg'
import log from '../../images/B4.jpeg'
import './login.css'
import {Link} from 'react-router-dom'
import Navbar from '../../component/Navbar'
const Login = () => {
    return (
        <div className="row " >
        
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
            }}>
            <Navbar/>
        <div className="login">
        <div className="col s12 m7">
    <div className="card horizontal z-depth-5">
      <div className="card-image">
        <img src={log} alt=""/>
      </div>
      <div className="card-stacked center ">
      <h2 className="header ">الدّخول</h2>
                <div className="card-action ">
                    <i className="medium material-icons g">account_circle</i> 
                    <br/>
                <h6> الإدارة</h6>
                </div>
                <div className="card-content">
                    <div className="form-field ">
                    <label for="email" className="right ">البريد الإلكتروني</label>
                    <input id="email" type="text" className="validate"></input>
                    </div>
                <br/>
                    <div className="form-field">
                    <label for="password" className="right">كلمة العبور</label>
                    <input id="password" type="password" className="validate"></input>
                    </div>
                    <div className="form-field">
                        <Link to="/HomeAdmin"className="btn-large   center-align" >دخول</Link>
                    </div>
               </div>
       
      </div>
    </div>
  </div>
</div>   
  </div>
        </div>
    )
}

export default Login
