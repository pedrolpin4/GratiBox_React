import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom'
import UserContext from './context/UserContext';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import PlansSelection from './pages/PlansSelection';
import RegisterPage from './pages/RegisterPage'
  
const App = () => {
    const [userData, setUserData] = useState({});
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [defaultPlan, setDefaultPlan] = useState('');

    useEffect(() => {
        if(localStorage.getItem("gratiboxLogin")){
            setUserData(JSON.parse(localStorage.getItem("gratiboxLogin")));    
            return;
        }    
    }, [])
    
    return (
        <UserContext.Provider value = {{userData, setUserData}}>
            <Router>
                <Routes>
                    <Route path = "/" exact element = {<HomePage setIsSigningIn = {setIsSigningIn}/>} />
                    <Route path = "/register" exact element = {<RegisterPage setIsSigningIn = {setIsSigningIn} isSigningIn = {isSigningIn}/>} />
                    <Route path = "/signatures" exact element = {<PlansPage setDefaultPlan = {setDefaultPlan}/>} />
                    <Route path = "/plans-selection" exact element = {<PlansSelection defaultPlan = {defaultPlan}/>} />
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App