import './Finfo.css'
import en from '../../images/En.png'
import et from '../../images/et1.png'
export default function Finfo() {
    return (
        <div className="container section">
        <div className="boxs">
        <div className="box z-depth-5" >
                 <i class="medium material-icons ic  deep-orange">school</i>
                 <div className="t">
                 <p className="featM">تلامذة</p>
                 <p className="featR">500</p>   
                 <p className="featS">السنة الدراسية 2020-2021</p>
                 </div>
                 
        </div>
        <div className="box z-depth-5" >
                 <i class="medium material-icons ic  light-blue">group</i>
                 <div className="t">
                 <p className="featM">مدرّسون</p>
                 <p className="featR1">100</p>   
                 <p className="featS">السنة الدراسية 2020-2021</p>
                 </div>
                 
        </div>
        <div className="box z-depth-5" >
                 <i class="medium material-icons ic   teal accent-3">person</i>
                 <div className="t">
                 <p className="featM">إدارة</p>
                 <p className="featR2">40</p>   
                 <p className="featS">السنة الدراسية 2020-2021</p>
                 </div>
                 
        </div>
        </div>
        </div>
    )
}
