import React from 'react'
import { Link } from 'react-router-dom'
import back from '../images/W8.jpeg'
import './Welcome.css'
export default function Welcome() {
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
            <div className="divbtn center">
            <h1>الدّخول</h1>
            <Link to="/LogAdmin" className="btn btn-large btn1">الإدارة</Link> <br/>
            <Link to="/LogProf" className="btn btn-large btn2">المدرّسون</Link>
            </div>
        </div>
    )
}
