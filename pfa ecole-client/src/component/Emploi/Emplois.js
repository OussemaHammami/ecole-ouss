import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import Alert from "sweetalert2";
import AjoutSeanceModal from "./ModelEmploye"
import moment from 'moment'
import axios from 'axios';

export default function Emplois() {
    const [title, setTitle] = useState("")

    const [data, setData] = useState([])
    const [clients, setClients] = useState([])
    const [car, setCar] = useState()
    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [selectInfoData, setSelectInfoData] = useState(null);



    // async function fetchSeances() {
    //     setData([])
    //     const seancesData = await getSeances();
     
    //     seancesData.data.forEach(s => {
    //         let eventInfo = { title: s.title, start: s.start, end: s.end, eventContent: s.eventContent, color: s.color }
    //         setData(prevData => ([...prevData, eventInfo]))
    //     }
    //     )

    // }

    

    function Select(selectInfo) {

        let calendarApi = selectInfo.view.calendar;

        const startM = moment(new Date(selectInfo.start)).format("YYYY-MM-DDTHH:mm");
        const endM = moment(new Date(selectInfo.end)).format("YYYY-MM-DDTHH:mm");

        const isOverlapE = isAnOverlapEvent(startM, endM);

        if (!isOverlapE) {

           
let title = prompt("Please enter a new title for your event");
   
    if (title) {
      calendarApi.addEvent(
        {
          //hedhom les information mta illi chet pushihom fil back 
          // will render immediately. will call handleEventAdd
          title,  //titre de l'évènement 
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        },
        true
      ); // temporary=true, will get overwritte
}


        }
        calendarApi.unselect();

    };

    // useEffect(() => {
    //     fetchSeances()
    //     fetchClients()
    //     fetchCar()
    // }, [])



    function isAnOverlapEvent(eventStartDay, eventEndDay) {

        for (let i = 0; i < data.length; i++) {
            const eventA = data[i];


            if (moment(eventStartDay).isAfter(eventA.start) && moment(eventStartDay).isBefore(eventA.end)) {
                return true;
            }

            if (moment(eventEndDay).isAfter(eventA.start) && moment(eventEndDay).isBefore(eventA.end)) {
                return true;
            }

            if (moment(eventStartDay).isSameOrBefore(eventA.start) && moment(eventEndDay).isSameOrAfter(eventA.end)) {
                return true;
            }
        }
        return false;
    }
    function eventClick(eventClick) {


        Alert.fire({
            title: "Informations",
            html:
                `<div class="table-responsive">
          <table class="table">
          <tbody>
          <tr >
          <td>Titre</td>
          <td><strong>` +
                eventClick.event.title +
                `</strong></td>
          </tr>
          <tr >
          <td>Début</td>
          <td><strong>
          ` +
                eventClick.event.startStr +
                `</strong></td>
                </tr>
                <tr >
                <td>Fin</td>
                <td><strong>
                `+ eventClick.event.endStr +
                `</strong></td>
                </tr>
                <tr >
                <td>Client</td>
                <td><strong>
                `+
                eventClick.event._def.extendedProps.eventContent
                +

                `
          </strong></td>
          </tr>
          </tbody>
          </table>
          </div>`,

            confirmButtonColor: "#d33",

            confirmButtonText: "Fermer",

        })


    };
    return (
        <div style={{ width: "100%", marginRight: "auto", marginLeft: "auto", marginTop: "100px" }}>

            <FullCalendar 
               plugins={[timeGridPlugin, interactionPlugin, listPlugin]}
                events={data}
                selectMirror={true}
                themeSystem="bootstrap"
                nowIndicator={true}
                eventContent={renderEventContent}
                initialView='timeGridWeek'
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "timeGridWeek,timeGridDay,listWeek"
                }}
                slotMinTime='08:00'
                slotMaxTime='20:00'
                // expandRows={true}

                navLinks={true}
                // editable= {true}
                selectable={true}
                eventLimit={true}
                eventLimitText={"More"}
                dayMaxEvents={true}
                locale='fr'
                locales={[frLocale]}
                allDaySlot={false}
                slotDuration='00:10:00'
                select={Select}
                eventClick={eventClick}
                eventOverlap={false}
                slotEventOverlap={false}

            />
            {/* <AjoutSeanceModal 
                isOpen={ajoutSeanceModalOpen}
                setModal={setAjoutSeanceModalOpen}
                selectInfoData={selectInfoData}
                fetchSeances={data}
                setData={setData}
               
            /> */}
        </div>
    )
}

function renderEventContent(eventInfo) {

    return (
        <>
            <b>{eventInfo.timeText}</b>
            <br />
            <i>{eventInfo.event.title}</i>
            <br />
            <b>{eventInfo.event._def.extendedProps.eventContent}</b>
        </>
    )
}






// async function getSeances() {
//     const resp = await axios.get(`http://localhost:3001/employe/emplois`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer " + localStorage.getItem("jwt")
//         }
//     })
//         .catch(error => {
//             return error.response;
//         })
//     return resp
// }

