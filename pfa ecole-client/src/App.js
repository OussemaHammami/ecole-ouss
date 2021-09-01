
import Admin2 from './Pages/Admin2/Admin2';
import Emploi from './Pages/Emploi';
import { BrowserRouter, Route} from 'react-router-dom';
import Admin3 from "./Pages/Admin3/Admin3";
import Home from './Pages/Home';
import User from './Pages/user/User'
import Niv1 from './Pages/Admin3/Niv1';
import Niv2 from './Pages/Admin3/Niv2';
import Niv3 from './Pages/Admin3/Niv3';
import Niv4 from './Pages/Admin3/Niv4';
import Niv5 from './Pages/Admin3/Niv5';
import Niv6 from './Pages/Admin3/Niv6';
import Admin4 from './Pages/Admin4/Admin4';
import Admin5 from './Pages/Prof+Matiere/Admin5';
import Login from './Pages/Login/Login'
import LoginProf from './Pages/Login/LoginProf'
//import En1 from './Pages/En1/En1';
import HomeEn from './Pages/HomeEn'
import ClasseEn from './Pages/ClasseEn/ClasseEn'
import Welcome from './Pages/Welcome';
import Etudient from './Pages/Etudient/Etudient';
import Presence from './Pages/ClasseEn/Presence/Presence';
import UserProf from './Pages/user/UserProf'
function App() {
  return (
    
    <BrowserRouter>

    <Route exact path='/'>
    <Welcome/>
    </Route>
    <Route path="/LogAdmin">
    <Login/>
    </Route>
    <Route path="/LogProf">
      <LoginProf/>
    </Route>
    <Route path="/HomeAdmin">
      <Home/>
    </Route>
    <Route path="/HomeProf">
      <HomeEn/>
    </Route>
      <Route path="/TP">
        <Admin2/>
      </Route>
      <Route path="/Em">
        <Emploi/>
      </Route>
      <Route path="/M">
      <Admin3/>
      </Route>
      <Route path="/user">
      <User/>
      </Route>
      <Route path="/niv1">
        <Niv1/>
      </Route>
      <Route path="/niv2">
        <Niv2/>
      </Route>
      <Route path="/niv3">
        <Niv3/>
      </Route>
      <Route path="/niv4">
        <Niv4/>
      </Route>
      <Route path="/niv5">
        <Niv5/>
      </Route>
      <Route path="/niv6">
        <Niv6/>
      </Route>
      <Route path="/TE">
        <Admin4/>
      </Route>
      <Route path="/PM">
        <Admin5/>
      </Route>
      <Route path="/HE">
        <HomeEn/>
      </Route>
      <Route path="/Etudiant">
        <Etudient/>
      </Route>
      <Route path="/Pr">
      <ClasseEn/>
      </Route>
      <Route path="/Presence">
        <Presence/>
      </Route>
      <Route path="/userP">
        <UserProf/>
      </Route>
      
     
    </BrowserRouter>
    
    
 
  );
}

export default App;
