
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
          placeholder="Enter an schoolYear..."
          name="schoolYear"
          value={editFormData.schoolYear}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a  number..."
          name="number"
          value={editFormData.number}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="level"
          value={editFormData.level}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
    </tr>
  );
};

export default Edit;