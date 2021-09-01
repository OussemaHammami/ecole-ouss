
import { Component } from 'react';
import NavbarAd from '../component/NavbarAd';
import { Inject ,ScheduleComponent, Day , Week , WorkWeek, Month , Agenda} from '@syncfusion/ej2-react-schedule'
import back from '../images/A4.jpeg'
import React from 'react';
import Emplois from '../component/Emploi/Emplois';
class Emploi extends Component {
  
   render(){
  return (
      
    <div style={{ 
        backgroundImage: 'url('+back+')',
        backgroundSize: "cover",
        height: "100vh",
       
       
        }}>
    <NavbarAd/>
    <div className="container section">
     <ScheduleComponent currentView="Month">
       <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
     </ScheduleComponent>
    </div>
    <Emplois/>
    </div>
  );
}
}
export default Emploi;
