import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import UserContext from './context/UserContext';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import PlansOptions from './pages/PlansOptions';
import RegisterPage from './pages/RegisterPage'
import DeliveryInfo from './pages/DeliveryInfo';
import PlanContext from './context/PlanContext';
import UserSignature from './pages/UserSignature';
  
const App = () => {
    const [userData, setUserData] = useState({});
    const [signature, setSignature ] = useState({})
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [defaultPlan, setDefaultPlan] = useState('');
    const [ districts, setDistricts ] = useState([])

    useEffect(() => {
        if(localStorage.getItem("gratiboxLogin")){
            setUserData(JSON.parse(localStorage.getItem("gratiboxLogin")));    
            return;
        }    
    }, [])
    
    return (
        <UserContext.Provider value = {{userData, setUserData}}>
            <Router>
                <PlanContext.Provider value = {{signature, setSignature}}>
                    <Routes>
                        <Route path = "/" exact element = {<HomePage setIsSigningIn = {setIsSigningIn}/>} />
                        <Route path = "/register" exact element = {<RegisterPage setIsSigningIn = {setIsSigningIn} isSigningIn = {isSigningIn}/>} />
                        <Route path = "/signatures" exact element = {<PlansPage setDefaultPlan = {setDefaultPlan}/>} />
                        <Route path = "/plans-selection" exact element = {<PlansOptions defaultPlan = {defaultPlan} setDistricts = {setDistricts}/>} />
                        <Route path = "/delivery-info" exact element = {<DeliveryInfo districts = {districts}/>} />
                        <Route path = "/user-signature" exact element = {<UserSignature />} />
                    </Routes>
                </PlanContext.Provider>
            </Router>
        </UserContext.Provider>
    )
}

export default App