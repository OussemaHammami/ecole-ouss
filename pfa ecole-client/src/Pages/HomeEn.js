import ChartEn from '../component/chartEn/ChartEn'
import FinfoEn from '../component/FinfoEn/FinfoEn'
import NavbarEn from '../component/NavbarEn'
import back from "../images/A4.jpeg"
import { userData } from '../component/chartEn/dData2'
import Cov from '../images/En.jpeg'
import './Home.css'
export default function Home() {
    return (
         <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
         <NavbarEn/>
         <div className="cov14 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundSize:"100% 230%"}
        }>
        </div>
         <div className="home">
             <FinfoEn/>
             <ChartEn data={userData} title=" الحضور" dataKey="Active User"/>
             
         </div>
        </div>
    )
}