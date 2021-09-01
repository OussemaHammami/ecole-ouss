import './User.css'
import admin from '../../images/Admin.png'
import NavbarAd from '../../component/NavbarAd'
import back from '../../images/A4.jpeg'
import Cov from  '../../images/Cov4.jpeg'
export default function User() {
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
            <NavbarAd/>
            <div className="cov2 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 42%",
            backgroundSize:"100% "}}>

            </div>
            <div className="container section">
            <div className="users">
            <div className="edit z-depth-5">
            <p>رقم بطاقة التعريف</p>
            <input  style={{width:"400px", direction:"rtl", borderColor:"orangered"}}   type="text" name="Number" required="requird" placeholder="	رقم بطاقة التعريف.." />
            <p> اسم المستخدم</p>
            <input   style={{width:"400px", direction:"rtl", borderColor:"orangered"}} type="text" name="fullName" required="requird" placeholder="اسم المستخدم.."/> 
            <p> البريد الإلكتروني</p>
            <input  style={{width:"400px" , direction:"rtl", borderColor:"orangered"}}  type="email" name="email" required="requird" placeholder="	البريد الإلكتروني.."/>
            <p>كلمة العبور</p>       
            <input style={{width:"400px" , direction:"rtl" , borderColor:"orangered"}} type="text" name="MDP" required="requird" placeholder="	كلمة العبور.."/>
            <br/>
            <button className="btn deep-orange" >تغير</button>
                        
                          
                        
                            
             </div>
            <div className="user z-depth-5">
            <div className="usertitle">
            <h6 >المعلومات الشّخصيّة</h6>
            </div>
            <div className="divName">
            <img src={admin} alt="" className="adminic"/>
            <span className="userName"> اسم المستخدم</span>
            </div>
            <div className="divinfo">
            <div className="infoic">
                <span ><i class="material-icons">person_outline</i></span>
                <span className="info"> 11111111</span> <br/>
            </div>
            <div className="infoic">
                <span ><i class="material-icons">person_outline</i></span>
                <span className="info"> اسم المستخدم </span> <br/>
            </div>
            <div className="infoic">
                <span ><i class="material-icons">mail_outline</i></span>
                <span className="info">البريد الإلكتروني </span> <br/>
            </div>
            </div>
            </div>
            
            </div>
            </div>
            
        </div>
    )
}
