import dayjs from "dayjs";
import { useEffect } from "react"
import { useNavigate } from "react-router";

const UserSignature = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))) {
            navigate("/");
            return;
        }

        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))?.user["signature_id"]){
            navigate('/signatures');
            return;
        } 
    }, [navigate])
    
    return (
        <div className = "plans-options">
            <div className = "plans-options__title">
                Good to see you, @{JSON.parse(localStorage.getItem("gratiboxLogin"))?.user.name}.
            </div>
            <div className = "plans-options__info mb-small">
                "Agradecer é arte de atrair coisas boas"
            </div>
            <div className = "plans-options__container mb-huge">
                <img className = "plans-options__image" src = "assets/image03.jpg" alt = "plans options"/>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Plan: 
                    </p>
                    <p className = "user-info__value">
                        oii
                    </p>
                </div>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Sign Date: 
                    </p>
                    <p className = "user-info__value">
                        oii
                    </p>
                </div>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Next Deliveries: 
                    </p>
                </div>
                <div className = "user-info__value--container">
                    <p className = "user-info__value">
                        {dayjs().format('MM-DD-YYYY')}
                    </p>
                </div>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Products: 
                    </p>
                </div>
                <div className = "user-info__value--container">
                    <p className = "user-info__value">
                        {dayjs().format('MM-DD-YYYY')}
                    </p>
                </div>
                <div className = "plans-options__btn big" onClick = {() => console.log("oi")}>
                    Rate Deliveries                    
                </div>
            </div>
        </div>
    )
}

export default UserSignature