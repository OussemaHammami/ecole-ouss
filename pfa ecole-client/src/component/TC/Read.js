import React from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    
   
     <tr>
     <td>
        <button className="btn waves-effect waves-light  light-blue lighten-2"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i class="material-icons" >edit </i>
        </button>
        <button className="btn waves-effect waves-light  deep-orange" type="button" onClick={() => handleDeleteClick(contact.id)}>
        <i class="material-icons">delete</i>
        </button>
      </td>
      
      <td>{contact.schoolYear}</td>
      <td>{contact.number} </td>
      <td>{contact.name}</td>
      <td>{contact.level}</td>
      
      
      
     
      
     
    </tr>
  );
};

export default Read;