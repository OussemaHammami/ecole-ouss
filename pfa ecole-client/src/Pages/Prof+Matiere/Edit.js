const Edit = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <div style={{backgroundColor:"white" ,borderRadius: "10px",border:'5px solid',borderColor:"pink" , padding:"30px" , marginTop:"20px" ,maxWidth:'500px' ,marginLeft:"auto", marginRight:"auto"}} className="center  z-depth-5 ">
      <div>
      <div>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="teacherId"
            value={editFormData.teacherId}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            required="required"
            placeholder="Enter an name..."
            name="classeId"
            value={editFormData.classeId}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            required="required"
            placeholder="Enter a  subjectId..."
            name="subjectId"
            value={editFormData.subjectId}
            onChange={handleEditFormChange}
          ></input>
        </div>
     
        <div>
          <input
            type="text"
            required="required"
            placeholder="Enter a schoolYear..."
            name="schoolYear"
            value={editFormData.schoolYear}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div> 
          <button className="btn-floating waves-effect waves-light  light-blue lighten-2" type="submit">  <i class="material-icons">check</i></button>
          <button className="btn-floating waves-effect waves-light  deep-orange" type="button" onClick={handleCancelClick}>
          <i class="material-icons">cancel</i>
          </button>
        </div>
       
        
        
      
        
      </div>
      </div>
    );
  };
  
  export default Edit;