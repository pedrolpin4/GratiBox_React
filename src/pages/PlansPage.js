import Plan from "../components/Plan";

const PlansPage = ({setDefaultPlan}) => {

    return (
        <div className = "plans">
            <h1 className = "plans__title">
                Bom te ver por aqui, @{JSON.parse(localStorage.getItem("gratiboxLogin")).user.name}.
            </h1>
            <p className = "plans__info mb-medium">
                Você ainda não assinou um plano, que tal começar agora?
            </p>
            <Plan content = "weekly" setDefaultPlan = {setDefaultPlan}/>
            <Plan content = "monthly" setDefaultPlan = {setDefaultPlan}/>
        </div>
    )
}

export default PlansPage