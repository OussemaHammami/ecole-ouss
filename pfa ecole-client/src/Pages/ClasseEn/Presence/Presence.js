import React, { Fragment, useState } from 'react'
import './table7.css'
import Cov from '../../../images/Pr.jpeg'
import NavbarEn from '../../../component/NavbarEn'
import back from '../../../images/A4.jpeg'
import data from './mock-data7.json'
import{nanoid} from 'nanoid'
import  Read  from './Read'
import Edit  from './Edit'



const Presence = () => {
  
 const [contacts]=useState(data);
 
    
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
            <NavbarEn/>
        <div className="cov1234 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 55%",
            backgroundSize:"100% 340%"}
        }>
        </div>
        
       
        
        <div class="container section">
        <div class='cont11234'>
        
        <div className="add1234">
        
   
     </div>  
        <form >
        <table className="striped z-depth-5 ">
        <thead>
          <tr>
         
          <th className="center"><h5> الحصص</h5></th>
          
             
               
          </tr>
          </thead>
          <tbody>
          {contacts.map((contact)=>(
           <Fragment>
           {  
           ( <Read 
               contact={contact} 
              
               />
           )}

            
          
          </Fragment>

          ))}
          </tbody>
 
      </table>
      </form>
      
     
   
  
          </div>
          </div>
        </div>
    )
}

export default Presence
