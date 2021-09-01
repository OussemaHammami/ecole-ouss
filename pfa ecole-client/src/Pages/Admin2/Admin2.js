import React, { Fragment, useState, useEffect } from 'react'
import './table.css'

import NavbarAd from '../../component/NavbarAd'
import back from '../../images/A4.jpeg'
import { nanoid } from 'nanoid'
import Read from '../../component/Read'
import Edit from '../../component/Edit'
import { TeacherAPI } from '../../api/teacher.api'



const Admin2 = () => {

  const [contacts, setContacts] = useState([])

//get
   useEffect(() => {
    const fetchAll = async () => {
       const data = await TeacherAPI.getAll();
       setContacts(data);
     }
     fetchAll();
    }, [])

  const [addFormData, setAddFromData] = useState(
    {
      firstName: "",
      password: "",
      id: "",
      login: "",
    });
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFromData(newFormData);

  };
  const [editFormData, setEditFormData] = useState(
    {
      firstName: "",
      password: "",
      id: "",
      login: "",
    });

  const handleEditFormChange = (event) => {

      event.preventDefault();
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
      setEditFormData(newFormData);     
  };


  //add
  const handleAddFromSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: addFormData.id,
      firstName: addFormData.firstName,
      password: addFormData.password,
      login: addFormData.login,
    };  
    TeacherAPI.add(newContact).then(data => {
         const newContacts = [...contacts, data]
         setContacts(newContacts);
    }).catch(e => {
      console.log(e);
    })
    
  };

  //update
  const handleEditFromSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      password: editFormData.password,
      id: editFormData.id,
      login: editFormData.login,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
      TeacherAPI.updateOne(editContactId , editedContact).then(contacts => {
    setContacts(newContacts);
    setEditContactId(null);
      })
    };


  const handleEditClick = (events, contact) => {
    events.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      firstName: contact.firstName,
      password: contact.password,
      id: contact.id,
      login: contact.login,
    }
    setEditFormData(formValues);
  
  };



  const handleCancelClick = () => {
    setEditContactId(null);
  }

  //delete
  const handleDeleteClick = (contactId) => {
    TeacherAPI.deleteOne(contactId).then(() => {
      const newContacts = [...contacts];
      const index = contacts.findIndex((contacts) => contacts.id === contactId);
      newContacts.splice(index, 1);
      setContacts(newContacts);
    });
 
 }

  



  const [modalIsOpen, setmodalIsOpen] = useState(false) 
  return (
    <div style={{
      backgroundImage: 'url(' + back + ')',
      backgroundSize: "cover",
      height: "100vh",


    }}>
      <NavbarAd />
      <div className="container section">
        <div className="cont1 z-depth-5 ">

          <form className="center" onSubmit={handleAddFromSubmit}>

            <tr>
              <td style={{ width: "600px" }} className="center">
                <button className="btn-floating waves-effect waves-light light-blue lighten-2" type="submit"> <i class="material-icons">group_add</i></button>
              </td>
              <td style={{ width: "600px" }}>
                <input style={{ width: "200px", direction: "rtl", borderColor: "orangered" }} type="text" name="password" required="requird" placeholder="	كلمة العبور.." onChange={handleAddFormChange} />
              </td>
              <td style={{ width: "600px" }}>
                <input style={{ width: "250px", direction: "rtl", borderColor: "orangered" }} type="text" name="login" required="requird" placeholder="	البريد الإلكتروني.." onChange={handleAddFormChange} />
              </td>
              <td style={{ width: "600px" }}>
                <input style={{ width: "200px", direction: "rtl", borderColor: "orangered" }} type="text" name="firstName" required="requird" placeholder="اسم المستخدم.." onChange={handleAddFormChange} />
              </td>
              <td style={{ width: "600px" }}>
                <input style={{ width: "200px", direction: "rtl", borderColor: "orangered" }} type="text" name="id" required="requird" placeholder="	رقم بطاقة التعريف.." onChange={handleAddFormChange} />
              </td>
              <div>

              </div>
            </tr>


          </form>


        </div>
      </div>


      <div class="container section">
        <div class='cont'>
          <div className="add">
          </div>
          <form onSubmit={handleEditFromSubmit}>
            <table className="striped z-depth-5 ">
              <thead>
                <tr>
                  <th>(إضافة, تحديث, فسخ)</th>
                  <th> كلمة العبور</th>
                  <th> البريد الإلكتروني</th>
                  <th> اسم المستخدم </th>
                  <th> رقم بطاقة التعريف</th>
                </tr>
              </thead>
              <tbody>
                {              
                  contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <Edit editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />) :
                        (<Read
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
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

export default Admin2
