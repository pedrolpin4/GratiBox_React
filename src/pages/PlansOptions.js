/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Option from "../components/Option"

const PlansOptions = ({defaultPlan}) => {
    const [plans, setPlans] = useState([]);
    const [deliveryDays, setDeliveryDays] = useState([]);
    const [products, setProducts] = useState([]);
    const [plan, setPlan] = useState(defaultPlan);
    const [deliveryDay, setDeliveryDay] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);

    const choice = [
        {
          title: 'Plano',
          option: ['Mensal', 'Semanal'],
        },
        {
          title: 'Entrega',
          option: ['Segunda', 'Quarta', 'Sexta', 'Dia 01', 'Dia 10', 'Dia 20'],
        },
        {
          title: 'Quero Receber',
          option: ['Chás', 'Incensos', 'Produtos orgânicos'],
        },
    ];

    useEffect(() => {
        setPlans(choice[0].option);
        setDeliveryDays(choice[1].option);
        setProducts(choice[2].option);
    }, [])

    return(
        <div className = "plans-options">
            <div className = "plans-options__title">
                Bom te ver aqui, @{JSON.parse(localStorage.getItem("gratiboxLogin")).user.name}.
            </div>
            <div className = "plans-options__info mb-small">
                "Agradecer é arte de atrair coisas boas"
            </div>
            <div className = "plans-options__container mb-huge">
                <img className = "plans-options__image" src = "assets/image03.jpg" alt = "plans options"/> 
                <Option setOption = {setPlan} options = {plans} option = {plan} content = "plans"/>
                <Option setOption = {setDeliveryDay} options = {plan === "Semanal" ? deliveryDays.slice(0,3) : deliveryDays.slice(3,6)} 
                    option = {deliveryDay} content = "delivery"/>
                <Option setOption = {setSelectedProducts} options = {products} option = {selectedProducts} content = "products"/>
                <div className = "plans-options__btn">
                    Próximo
                </div>
            </div>
        </div>
    )
}

export default PlansOptions