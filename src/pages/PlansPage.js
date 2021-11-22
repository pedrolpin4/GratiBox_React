import { useEffect } from "react";
import { useNavigate } from "react-router";
import Plan from "../components/Plan";

const PlansPage = ({setDefaultPlan}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))) {
            navigate("/");
            return;
        }
        if(JSON.parse(localStorage.getItem('gratiboxLogin'))?.user["signature_id"]){
            navigate('/user-signature');
            return;
        }    
    }, [navigate])

    return (
        <div className = "plans">
            <h1 className = "plans__title">
                Good to see you, @{JSON.parse(localStorage.getItem("gratiboxLogin"))?.user.name}.
            </h1>
            <p className = "plans__info mb-medium">
               Haven't you signed a plan yet? How about starting now?
            </p>
            <Plan content = "weekly" setDefaultPlan = {setDefaultPlan}/>
            <Plan content = "monthly" setDefaultPlan = {setDefaultPlan}/>
        </div>
    )
}

export default PlansPage