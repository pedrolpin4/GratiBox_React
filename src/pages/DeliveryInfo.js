/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PlanContext from "../context/PlanContext";
import UserContext from "../context/UserContext";
import { postSignature } from "../service/signPlan";
import { IoArrowDown } from "react-icons/io5";

const DeliveryInfo = ({districts}) => {
    const navigate = useNavigate();
    const [isSelecting, setIsSelecting] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const { signature, setSignature } = useContext(PlanContext);
    const [fullName, setFullName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState({})
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))) {
            navigate("/");
            return;
        }

        if(JSON.parse(localStorage.getItem('gratiboxLogin'))?.user["signature_id"]){
            navigate('/user-signature');
            return;
        }

        if(!signature.day){
            navigate("/plans-selection");
        }
    }, [navigate]);
   

    const handleSignature = async () => {
        setSignature({
            ...signature,
            streetNumber: deliveryAddress,
            city,
            zipCode,
            district: selectedDistrict.id,
            fullName,
            userId: userData.user.id,
        })

        const response = await postSignature({
            ...signature,
            streetNumber: deliveryAddress,
            city,
            zipCode,
            district: selectedDistrict.id,
            fullName,
            userId: userData.user.id,
        }, userData.token);

        if(!response.success){
           setMessage(response.message
            .replace('"streetNumber"', "Delivery Address")
            .replace('"zipCode"', "Zip Code")
            .replace('"city"', 'City')
            .replace('"fullName"', 'Full Name')
            );
        }

        if(response.success){
            setUserData({token: userData.token, user: {...userData.user, signature_id: response.data.signatureId}})
            localStorage.setItem('gratiboxLogin', JSON.stringify({token: userData.token, user: {...userData.user, signature_id: response.data.signatureId}}))
            navigate('/user-signature')
        }
    }

    return (
        <div className = "plans-options">
            <div className = "plans-options__title">
                Good to see you, @{JSON.parse(localStorage.getItem("gratiboxLogin"))?.user.name}.
            </div>
            <div className = "plans-options__info mb-small">
                "Greeting is the art of attracting good vibrations"
            </div>
            <div className = "plans-options__container mb-huge">
                <img className = "plans-options__image" src = "assets/image03.jpg" alt = "plans options"/>
                <p  className = "error-message mb-small">{message}</p>
                <input className = "plans-options__input" placeholder = "Full Name" value = {fullName}
                    onChange = {(e) => setFullName(e.target.value)} pattern = ".{2, }"/>
                <input className = "plans-options__input" placeholder = "Delivery Address" value = {deliveryAddress}
                    onChange = {(e) => setDeliveryAddress(e.target.value)} pattern = ".{4, }"/>
                <input className = "plans-options__input" placeholder = "Zip Code"  value = {zipCode}
                    onChange = {(e) => setZipCode(e.target.value)} pattern = ".{8}"/>
                <div className = "plans-options__uf--container">
                    <input className = " plans-options__input plans-options__input--small" placeholder = "City"  value = {city}
                        onChange = {(e) => setCity(e.target.value)} pattern = ".{2, }"/>
                    <div className = {isSelecting ? "uf active" : "uf"}>
                        <div className = {isSelecting ? "uf__placeholders active" : "uf__placeholders"}
                            onClick = {() => setIsSelecting(!isSelecting)}>
                            <p>{selectedDistrict.name || "District"}</p>
                            <IoArrowDown size = {20}/>
                        </div>
                        <div className = {isSelecting ? "uf__options active" : "uf__options"}>
                            {
                                districts.map(district => (
                                    <div className = {isSelecting ? "uf__option active" : "uf__option"} key = {district.id}
                                        onClick = {() => {
                                           setIsSelecting(false)
                                           setSelectedDistrict(district)
                                        }}>
                                        {district.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className = "plans-options__btn" onClick = {handleSignature}>
                    End
                </div>
            </div>
        </div>
    )
}

export default DeliveryInfo;