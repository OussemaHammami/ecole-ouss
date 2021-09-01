import React, { useState } from "react";

import { AbsenceAPI } from '../../../api/absence.api'


const Read = ({ student, date, hourBegin, hourEnd, isAbsent }) => {



  const [absent, setAbsent] = useState(isAbsent);
 
  function handleAbsenceChange(event) {
    
    // isAbsent = !absent
    // setAbsent(isAbsent);
    //   if(event.target.name == "absent"){ 
    //     //todo add absent user to database
    //     AbsenceAPI.add(newAbsence).then(data => {

    //  }).catch(e => {
    //    alert("error when add absence");
    //    console.log(e);
    //  })
    //   }
    //   else{
    //     //delete absent user from datatabse
    //   }  

  }
  return (
    <tr>

      <td>
        <label>
          <input name={"absence_radio" + student.id} value="present" type="radio" checked={!isAbsent}
            onClick="handleAbsenceChange('present')" />
          <span>P</span>
        </label>

        <label>
          <input name={"absence_radio" + student.id} value="absent" type="radio" checked={isAbsent}
            onClick="handleAbsenceChange" />
          <span>A</span>
        </label>

      </td>

      <td>{student.firstName} {student.lastName}</td>
      <td>{student.id}</td>

    </tr>
  );
};

export default Read;