import { useNavigate } from "react-router"
import YingYang from "../animations/svgs/YingYang";

const Plan = ({content, setDefaultPlan}) => {
    const navigate = useNavigate();
    return(
        <div className = "plan mb-big"> 
            {/* <img className = "plan__image" alt = {content === "weekly" ? "weekly signature" : "monthly signature"}
                src = {content === "weekly" ? "assets/image04.jpg" : "assets/image02.jpg"} /> */}
           
                {
                    content === "weekly" ? 
                    <>
                        <img className = "plan__image" alt = "weekly signature"
                            src =  "assets/image04.jpg"/>
                        <p className = "plan__description">
                            "You'll receive a box per week. Ideal for those who want to practice gratitude everyday."
                        </p>
                    </>
                    :
                    <>
                        <div className = "plan__animation">
                            <YingYang size = {"150px"} className = "plan__animation"/>
                        </div>
                        <p className = "plan__description">
                            You receive a box per month <br /> <br />
                            Ideal for those who are begginers at gratitude
                        </p>
                    </>
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