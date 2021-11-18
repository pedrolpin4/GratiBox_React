import { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom'
import UserContext from './context/UserContext';
import RegisterPage from './pages/RegisterPage'
  
const App = () => {
    const [userData, setUserData] = useState({});

    return (
        <UserContext.Provider value = {{userData, setUserData}}>
            <Router>
                <Routes>
                    <Route path = "/" exact element = {<RegisterPage />}/>
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App