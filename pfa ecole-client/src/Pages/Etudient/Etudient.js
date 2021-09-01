import React, { Fragment, useState } from 'react'
import './tableEt.css'
import Cov from '../../images/et.jpeg'
import NavbarEn from '../../component/NavbarEn'
import back from '../../images/A4.jpeg'
import data from './mock-dataet.json'
import{nanoid} from 'nanoid'
import  Read  from './Read'
import Edit  from './Edit'



const Etudient = () => {
  
 const [contacts, setContacts]=useState(data);
 const [addFormData, setAddFromData]=useState(
   {
     fullName:"",
     classe:"",
     Number:"",
     date:"",


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
        fullName:"",
        classe:"",
        Number:"",
        date:"",
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
        fullName: addFormData.fullName,
        classe: addFormData.classe,
        Number: addFormData.Number,
        date: addFormData.date,
      };
      const newContacts =[ ...contacts, newContact]
      setContacts(newContacts);
    };
    const handleEditFromSubmit= (event)=>{
      event.preventDefault();
      const editedContact ={
        id : editContactId,
        fullName: editFormData.fullName,
        classe: editFormData.classe,
        Number: editFormData.Number,
        date : editFormData.date,
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
        fullName: contact.fullName,
        classe: contact.classe,
        Number: contact.Number,
        date: contact.date,
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
            <NavbarEn/>
        <div className="cov123 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 55%",
            backgroundSize:"100% 340%"}
        }>
        </div>
        <div className="container section ">
          <div className="cont123 z-depth-5 ">
         
                          <form className="center" onSubmit={handleAddFromSubmit}>
                         
                          <tr>
                          <td style={{width:"600px"}} className="center">
                            <button className="btn-floating waves-effect waves-light light-blue lighten-2" type="submit"> <i class="material-icons">group_add</i></button>
                            </td>
                            <td style={{width:"600px"}}>
                            <input style={{width:"200px" , direction:"rtl" , borderColor:"orangered"}} type="text" name="classe" required="requird" placeholder="	القسم.." onChange={handleAddFormChange}/>
                          </td>
                          <td style={{width:"600px"}}>
                            <input  style={{width:"250px" , direction:"rtl", borderColor:"orangered"}}  type="text" name="date" required="requird" placeholder="تاريخ الولادة.."onChange={handleAddFormChange}/>
                          </td>
                          <td style={{width:"600px"}}>
                            <input   style={{width:"200px", direction:"rtl", borderColor:"orangered"}} type="text" name="fullName" required="requird" placeholder="اسم التلميذ.." onChange={handleAddFormChange}/>   
                            </td>
                          <td style={{width:"600px"}}>
                            <input  style={{width:"200px", direction:"rtl", borderColor:"orangered"}}   type="text" name="Number" required="requird" placeholder="	رقم التسجيل.." onChange={handleAddFormChange} />
                            </td>
                            
                         
                          
                          
                            <div>
                         
                          
                          </div>
                          </tr>
                           
                           
                      </form>
        

          </div>
        </div>
       
        
        <div class="container section">
        <div class='cont1123'>
        
        <div className="add123">
        
   
     </div>  
        <form onSubmit={handleEditFromSubmit}>
        <table className="striped z-depth-5 ">
        <thead>
          <tr>
          <th>(إضافة, تحديث, فسخ)</th>
          <th>القسم</th>
          <th>تاريخ الولادة</th>
          <th> اسم التلميذ </th>
          <th> رقم التسجيل</th>
             
               
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

export default Etudient
