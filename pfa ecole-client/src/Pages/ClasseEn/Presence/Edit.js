import React from "react";

const Edit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
    <td> 
        <button className="btn-floating waves-effect waves-light  light-blue lighten-2" type="submit">  <i class="material-icons">check</i></button>
        <button className="btn-floating waves-effect waves-light  deep-orange" type="button" onClick={handleCancelClick}>
        <i class="material-icons">cancel</i>
        </button>
      </td>
   
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an classe..."
          name="classe"
          value={editFormData.classe}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a  number..."
          name="Number"
          value={editFormData.Number}
          onChange={handleEditFormChange}
        ></input>
      </td>
    </tr>
  );
};

export default Edit;