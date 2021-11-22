/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import Mindfullness from "../animations/svgs/Minfullness";
import {calcNextMonthDeliveries, calcNextWeeksDeliveries} from "../factories/dateFactory";
import getSignature from "../service/userSignature";

const UserSignature = () => {
    const navigate = useNavigate();
    const [nextDeliveries, setNextDeliveries] = useState([])
    const [plan, setPlan] = useState('');
    const [products, setProducts] = useState([]);
    const [signDate, setSignDate] = useState('');

    const listSignature = async () => {
        const response = await getSignature(JSON.parse(localStorage.getItem('gratiboxLogin')).token);

        if(response.data){
            const date = response.data.signDate
            setSignDate(dayjs(date).format('YYYY-MM-DD'));
            setProducts([...response.data.products]);

            if(response.data.day === '1st' || response.data.day === '10th' || response.data.day === '20th'){
                setPlan('Monthly');
                const date = calcNextMonthDeliveries(response.data.day);
                setNextDeliveries(date)
                return;
            }

            setPlan('Weekly');
            const weekDate = calcNextWeeksDeliveries(response.data.day)
            setNextDeliveries(weekDate)
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
            <div className = "plans-options__title signature">
                Good to see you, @{JSON.parse(localStorage.getItem("gratiboxLogin"))?.user.name}.
            </div>
            <div className = "plans-options__info mb-small">
                "Greeting is the art of attracting good vibrations"
            </div>
            <div className = "plans-options__container mb-big">
                <Mindfullness size = {'280px'}/>
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
                    {
                        nextDeliveries.map((nd, i) => (
                            <p className = "user-info__value" key = {nd + i}>
                                {nd}
                            </p>
                        ))
                    }
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