import React from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    
    <div style={{backgroundColor:"white", border:'5px solid' ,borderColor:'pink', padding:"30px" , marginTop:"20px" ,maxWidth:'500px' ,marginLeft:"auto", marginRight:"auto" ,borderRadius: "10px", flexFlow:"wrap-reverse"}} className="center  z-depth-5 ">
     <div>
    
      
      
      
      
      <div style={{padding:"10px" }}>{contact.teacherId} : إسم المدرس</div>
      <div style={{padding:"10px"}} >{contact.classeId} : القسم</div>
      <div style={{padding:"10px"}}>{contact.subjectId} : المادة </div>
      <div style={{padding:"10px"}}>{contact.schoolYear} : 	السنة الدراسية</div>
      <div >
        <button className="btn waves-effect waves-light  light-blue lighten-2"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i class="material-icons" >edit </i>
        </button>
        <button className="btn waves-effect waves-light  deep-orange" type="button" onClick={() => handleDeleteClick(contact.id)}>
        <i class="material-icons">delete</i>
        </button>
      </div>
      
      </div>
      
     
      
     
    </div>
  );
};

export default Read;