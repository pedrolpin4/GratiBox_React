/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import getSignature from "../service/userSignature";

const UserSignature = () => {
    const navigate = useNavigate();
    const [day, setDay] = useState('');
    const [plan, setPlan] = useState('')
    const [products, setProducts] = useState([]);
    const [signDate, setSignDate] = useState('')

    const listSignature = async () => {
        const response = await getSignature(JSON.parse(localStorage.getItem('gratiboxLogin')).token);

        if(response.data){
            const date = response.data.signDate
            setSignDate(dayjs(date).format('YYYY-MM-DD'));
            setDay(response.data.day);
            setProducts([...response.data.products]);

            if(day === 'Dia 01' || day === 'Dia 10' || day === 'Dia 20'){
                setPlan('Monthly');
                return;
            }

            setPlan('Weekly');
        }
    }

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))) {
            navigate("/");
            return;
        }

        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))?.user["signature_id"]){
            navigate('/signatures');
            return;
        }
        
        listSignature();
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
                </div>
                <div className = "user-info__value--container">
                    <p className = "user-info__value">
                    {plan}
                    </p>
                </div>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Sign Date: 
                    </p>
                </div>
                <div className = "user-info__value--container">
                    <p className = "user-info__value">
                    {signDate}
                    </p>
                </div>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Next Deliveries: 
                    </p>
                </div>
                <div className = "user-info__value--container">
                    <p className = "user-info__value">
                        {day}
                    </p>
                </div>
                <div className = "user-info">
                    <p className = "user-info__type">
                        Products: 
                    </p>
                </div>
                <div className = "user-info__value--container">
                    <>
                        {products.map(p => (
                            <p className = "user-info__value" key = {p.id}>
                                {p.name}
                            </p>
                        ))}
                    </>
                </div>
                <div className = "plans-options__btn big">
                    Rate Deliveries                    
                </div>
            </div>
        </div>
    )
}

export default UserSignature