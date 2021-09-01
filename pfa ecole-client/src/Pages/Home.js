import Chart from '../component/chart/Chart'
import Finfo from '../component/Finfo/Finfo'
import NavbarAd from '../component/NavbarAd'
import back from "../images/A4.jpeg"
import { userData } from '../component/chart/dData'
import Cov from '../images/adm.jpeg'
import './Home.css'
export default function Home() {
    
    return (
         <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
         <NavbarAd/>
         <div className="cov14 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundSize:"100% 230%"}
        }>
        </div>
         <div className="home">
             <Finfo/>
             <Chart data={userData} title=" الحضور" dataKey="Active User"/>
             
         </div>
        </div>
    )
}
