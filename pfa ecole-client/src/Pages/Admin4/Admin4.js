import React, { Fragment, useState } from 'react'
import './table4.css'
import Cov from '../../images/classe.jpeg'
import NavbarAd from '../../component/NavbarAd'
import back from '../../images/A4.jpeg'
import data from './mock2-data.json'
import{nanoid} from 'nanoid'
import  Read  from '../../component/TC/Read'
import Edit  from '../../component/TC/Edit'


const Admin4 = () => {
const [contacts, setContacts]=useState(data);
const [addFormData, setAddFromData]=useState(
  {
    level:"",
    name:"",
    number:"",
    schoolYear:"",


  });
  const [editContactId,setEditContactId]=useState(null);
  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName= event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={...addFormData};
    newFormData[fieldName]= fieldValue;
    setAddFromData(newFormData);
  
   };
   const [editFormData, setEditFormData] = useState(
     {
       level:"",
       name:"",
       number:"",
       schoolYear:"",
     });

     const handleEditFormChange=(event)=>{
       event.preventDefault();
       const fieldName= event.target.getAttribute("name");
       const fieldValue=event.target.value;
        const newFormData={...editFormData};
        newFormData[fieldName]=fieldValue;
        setEditFormData(newFormData);
     } ;

   const handleAddFromSubmit=(event)=>{
     event.preventDefault();
     const newContact ={
       id: nanoid(),
       level: addFormData.level,
       name: addFormData.name,
       number: addFormData.number,
       schoolYear: addFormData.schoolYear,
     };
     const newContacts =[ ...contacts, newContact]
     setContacts(newContacts);
   };
   const handleEditFromSubmit= (event)=>{
     event.preventDefault();
     const editedContact ={
       id : editContactId,
       level: editFormData.level,
       name: editFormData.name,
       number: editFormData.number,
       schoolYear : editFormData.schoolYear,
     };
     const newContacts=[...contacts];
     const index= contacts.findIndex((contact)=>contact.id === editContactId);
     newContacts[index]= editedContact;
     setContacts(newContacts);
     setEditContactId(null) 
   };
   const handleEditClick=(events, contact)=>{
     events.preventDefault();
     setEditContactId(contact.id);
     const formValues={
       level: contact.level,
       name: contact.name,
       number: contact.number,
       schoolYear: contact.schoolYear,
     }
     setEditFormData(formValues);
   };
   const handleCancelClick=()=>{
     setEditContactId(null);
   }
   const handleDeleteClick =(contactId)=>{
     const newContacts=[...contacts];
     const index = contacts.findIndex((contacts)=> contacts.id ===contactId);
     newContacts.splice(index,1);
     setContacts(newContacts);
   }
   
   return (
       <div style={{
           backgroundImage: 'url('+back+')',
           backgroundSize: "cover",
           height: "100vh",
          
          
           }}>
       <NavbarAd/>
       <div className="cov13 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundSize:"100% 340%"}
        }>
        </div>
       <div className="container section">
         <div className="cont13 z-depth-5 ">
        
                         <form className="center" onSubmit={handleAddFromSubmit}>
                        
                         <tr>
                         <td style={{width:"600px"}} className="center">
                           <button className="btn-floating waves-effect waves-light light-blue lighten-2" type="submit"> <i class="material-icons">group_add</i></button>
                           </td>
                           
                           
                         <td style={{width:"600px"}}>
                           <input  style={{width:"250px" , direction:"rtl", borderColor:"orangered"}}  type="text" name="schoolYear" required="requird" placeholder="	السنة الدراسية.."onChange={handleAddFormChange}/>
                         </td>
                         <td style={{width:"600px"}}>
                           <input  style={{width:"200px", direction:"rtl", borderColor:"orangered"}}   type="text" name="number" required="requird" placeholder="	عدد التلاميذ.." onChange={handleAddFormChange} />
                           </td>
                           <td style={{width:"600px"}}>
                           <input style={{width:"200px" , direction:"rtl" , borderColor:"orangered"}} type="text" name="name" required="requird" placeholder="	إسم القسم.." onChange={handleAddFormChange}/>
                         </td>
                         <td style={{width:"600px"}}>
                           <input   style={{width:"200px", direction:"rtl", borderColor:"orangered"}} type="text" name="level" required="requird" placeholder="المستوى.." onChange={handleAddFormChange}/>   
                           </td>
                         
                           
                        
                         
                         
                           <div>
                        
                         
                         </div>
                         </tr>
                          
                          
                     </form>
       

         </div>
       </div>
      
       
       <div class="container section">
       <div class='cont3'>
       
       <div className="add2">
       
  
       </div>  
        <form onSubmit={handleEditFromSubmit}>
        <table className="striped z-depth-5 ">
        <thead>
          <tr>
          <th>(إضافة, تحديث, فسخ)</th>   
           <th> 	السنة الدراسية</th>      
           <th> 	عدد التلاميذ</th>         
           <th> 	إسم القسم </th>        
           <th> المستوى</th>
             
               
          </tr>
          </thead>
         <tbody>
         {contacts.map((contact)=>(
          <Fragment>
          { editContactId=== contact.id ?(
            <Edit editFormData={editFormData} 
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}

            />) : 
          ( <Read 
              contact={contact} 
              handleEditClick={handleEditClick}
              handleDeleteClick ={handleDeleteClick }
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

