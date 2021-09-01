import React from 'react'
import NavbarEn from '../../component/NavbarEn'
import back from '../../images/A4.jpeg'
export default function En1() {
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
            <NavbarEn/>
            
            
        </div>
    )
}
