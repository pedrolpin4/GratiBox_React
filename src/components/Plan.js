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
                        "Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias."
                    </p>
                    :
                    <p className = "plan__description">
                        Você recebe um box por mês <br /> <br />
                        Ideal para quem está começando agora
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
                Assinar
            </div>
        </div>
    )
}

export default Plan