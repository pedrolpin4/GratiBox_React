import { useContext } from "react";
import Plan from "../components/Plan";
import UserContext from "../context/UserContext"

const PlansPage = () => {
    const { userData } = useContext(UserContext)

    return (
        <div className = "plans">
            <h1 className = "plans__title">
                Bom te ver por aqui, @ {userData.user.name}
            </h1>
            <p className = "plans__info">
                Você ainda não assinou um plano, que tal começar agora?
            </p>
            <Plan content = "weekly"/>
            <Plan content = "mounthly"/>
        </div>
    )
}

export default PlansPage