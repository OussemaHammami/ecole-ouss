import React, { Fragment, useState ,useEffect } from 'react'
import './table5.css'
import Cov from '../../images/cl.jpeg'
import NavbarEn from '../../component/NavbarEn'
import back from '../../images/A4.jpeg'
import { ClasseAPI } from '../../api/classe.api'
import  Read  from './Read'



const Admin4 = () => {
const [classes, setClasses]=useState([]);

//get
useEffect(() => {
    const fetchAll = async () => {
       const data = await ClasseAPI.getAll();
       setClasses(data);
     }
     fetchAll();
    }, [])
    
   
   
   
   
   return (
       <div style={{
           backgroundImage: 'url('+back+')',
           backgroundSize: "cover",
           height: "100vh",
          
          
           }}>
       <NavbarEn/>
       <div className="cov134 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 55%",
            backgroundSize:"100% 340%"}
        }>
        </div>
       
      
       
       <div class="container section">
       <div class='cont321'>
       
       <div className="add23">
       
  
       </div>  
        <form >
        <table className="striped z-depth-5 " >
        <thead>
          <tr className="center">
        
           <th className="center"> 	السنة الدراسية</th>      
           <th className="center"> 	إسم القسم </th>        
          
             
               
          </tr>
          </thead>
         <tbody>
         {classes.map((classe)=>(
          <Fragment>
          {  
          ( <Read 
              classe={classe} 
              
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

export default Admin4
