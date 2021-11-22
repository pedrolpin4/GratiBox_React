import { useNavigate } from "react-router"

const Plan = ({content, setDefaultPlan}) => {
    const navigate = useNavigate();
    return(
        <div className = "plan mb-big"> 
            <img className = "plan__image" alt = {content === "weekly" ? "weekly signature" : "monthly signature"}
                src = {content === "weekly" ? "assets/image04.jpg" : "assets/image02.jpg"} />
           
                {
                    content === "weekly" ? 
                    <p className = "plan__description">
                        "You'll receive a box per week. Ideal for those who want to practice gratitude everyday."
                    </p>
                    :
                    <p className = "plan__description">
                        You receive a box per month <br /> <br />
                        Ideal for those who are begginers at gratitude
                    </p>
                }
            <div className = "plan__btn" onClick = {() => {
                if(content === "weekly") {
                    setDefaultPlan("weekly")
                    navigate("/plans-selection")
                    return;
                }

                setDefaultPlan("monthly")
                navigate("/plans-selection")
            }}>
                Sign
            </div>
        </div>
    )
}

export default Plan