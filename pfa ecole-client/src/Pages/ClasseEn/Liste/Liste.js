import React, { Fragment, useState, useEffect } from 'react'
import './tableListe.css'
import { StudentAPI } from '../../../api/student.api'
import { AbsenceAPI } from '../../../api/absence.api'
import Read from './Read'
import { Container, DatePicker, Select } from 'react-materialize'
import moment from 'moment'


const Liste = ({ classId }) => {

  const [date, setDate] = useState(new Date());

  const [hour, setHour] = useState(0)
  
  const hours = [
    {hourBegin:"08:00", hourEnd: "10:00"},
    {hourBegin:"10:00", hourEnd: "12:00"},
    {hourBegin:"14:00", hourEnd: "16:00"},
    {hourBegin:"16:00", hourEnd: "18:00"},
  ]
  
  function onSelectHours(e){
    setHour(e.target.value);
    //todo recall fetchAllByDateAndHourAndClasse with the new params
  }


  function onChangeDate(e){
    alert(e.target)
  }
  

  //state = { date: new Date().toLocaleDateString()};
  const [students, setStudents] = useState([]);

  //get all absences by class and date and hours
  useEffect(() => {
    const fetchAllByDateAndHourAndClasse = async () => {
      const absenceList = await AbsenceAPI.getAbsenceByDateAndHourAndClasse(date,hours[hour].hourBegin, hours[hour].hourEnd, classId);
      //get All student By classe
      
        const fetchAll = async () => {
          const allStudentByClass = await StudentAPI.getAllByClasse(classId);
          for(let student of allStudentByClass){
            for(let absentStudent of absenceList){
              if(student.id === absentStudent.studentId){
                student["absent"] = true;
                break;
              }
            
            }
          }
          setStudents(allStudentByClass);
        }
        fetchAll();

    }
    fetchAllByDateAndHourAndClasse();
  }, [hour, date])




  const [editFormData, setEditFormData] = useState(
    {
      fullName: "",
      classe: "",
      Number: "",
      date: "",
    });


  return (
    <div>
      <div class="input-field col s12 ">
        <Select onChange={onSelectHours} value={hour}>
          <option value="0">8-10</option>
          <option value="1">10-12</option>
          <option value="2">14-16</option>
          <option value="3">16-18</option>
        </Select>

      </div>

      <Container>
        <p className="flow-text">Date: </p>
        <DatePicker
          value={moment(date).format("YYYY-DD-MM")}
          onChange = {(newValue) => {
            setDate(moment(newValue).format("YYYY-DD-MM"));
          }}
        ></DatePicker>




      </Container>



      <div >

        <div class='cont1123'>

          <div className="add123">


          </div>
          <form>
            <table className="striped z-depth-5 ">
              <thead>
                <tr>
                  <th> الحضور </th>
                  <th> اسم التلميذ </th>
                  <th> رقم التسجيل</th>


                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <Fragment>
                    {
                      (<Read
                        student={student}
                        date = {date}
                        hourBegin = {hours[hour].hourBegin}
                        hourEnd = {hours[hour].hourEnd}
                        isAbsent = {student.absent == undefined? false: true}
                      
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

export default Liste
