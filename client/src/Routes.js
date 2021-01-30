import {React,Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';

// Components
import Home from './components/screens/Home/home';
import Profil from './components/screens/Profil/profil';
import KelasPra from './components/screens/Kelas/kelaspra';
import FormCV from './components/screens/CVForm/CVForm';
import KelasPra1 from './components/screens/Kelas/kelaspra1';
import TanyaUstadz from './components/screens/TanyaUstadz/TanyaUstadz';
import Settings from './components/screens/Settings/setting';
import Landingpage from './components/screens/Landingpage/landingpage';
// import Login from './components/screens/login/Login';
import Taaruf from './components/screens/Taaruf/Taaruf';


const Routes = () => {

    return (
        <Switch>
            <Route exact path="/"><Landingpage /></Route>
            <Route exact path="/home" ><Home /></Route>
            <Route exact path="/profil" ><Profil /></Route>
            <Route exact path="/kelaspranikah" ><KelasPra /></Route>
            <Route exact path="/formcv" ><FormCV /></Route>
            <Route exact path="/syaratmenikah" ><KelasPra1 /></Route>
            <Route exact path="/taaruf" ><Taaruf /></Route>
            <Route exact path="/tanyaustadz" ><TanyaUstadz /></Route>
            <Route exact path="/settings" ><Settings /></Route>
            {/* <Route exact path="/login"></Route> */}
        </Switch>
    )
}

export default Routes