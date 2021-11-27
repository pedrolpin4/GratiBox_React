/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import Option from "../components/Option"
import PlanContext from "../context/PlanContext";
import { getPlans } from "../service/signPlan";
import Mindfullness from "../animations/svgs/Minfullness"

const PlansOptions = ({defaultPlan, setDistricts}) => {
    const navigate = useNavigate();
    const { setSignature } = useContext(PlanContext);
    const [plans, setPlans] = useState([]);
    const [deliveryDays, setDeliveryDays] = useState([]);
    const [products, setProducts] = useState([]);
    const [plan, setPlan] = useState(defaultPlan);
    const [deliveryDay, setDeliveryDay] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [message, setMessage] = useState('')


    const listOptions = async () => {
        const response = await getPlans(JSON.parse(localStorage.getItem("gratiboxLogin")).token)

        if(response.data){
            setPlans([{id: 1, name: 'Monthly'}, {id: 2, name: 'Weekly'}]);
            setDeliveryDays([...response.data.days]);
            setProducts([...response.data.products]);
            setDistricts([...response.data.districts])
        }

        return response.message;
    }

    const handleOptions = () => {
        if(!selectedProducts.length){
            setMessage('You must select at least one product')
            return;
        }

        if(!plan){
            setMessage('You must select your plan')
            return;
        }

        if(!deliveryDay){
            setMessage('You must select your Delivery Day')
            return;
        }

        setSignature({
            day: deliveryDay,
            products: selectedProducts,
        })

        navigate("/delivery-info")
    }

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

    useEffect(() => {
        listOptions();
    }, [])

    return(
        <div className = "plans-options">
            <div className = "plans-options__title">
                Good to see you, @{JSON.parse(localStorage.getItem("gratiboxLogin"))?.user.name}.
            </div>
            <div className = "plans-options__info mb-small">
                "Greeting is the art of attracting good vibrations"
            </div>
            <div className = "plans-options__container mb-huge">
               <Mindfullness size = {"250px"}/>
                <p className = "error-message mb-small">{message}</p> 
                <Option setOption = {setPlan} options = {plans} option = {plan} content = "plans"/>
                <Option setOption = {setDeliveryDay} options = {plan === 2 ? deliveryDays.slice(0,3) : deliveryDays.slice(3,6)} 
                    option = {deliveryDay} content = "delivery"/>
                <Option setOption = {setSelectedProducts} options = {products} option = {selectedProducts} content = "products"/>
                <div className = "plans-options__btn" onClick = {handleOptions}>
                    Next
                </div>
            </div>
        </div>
    )
}

export default PlansOptions