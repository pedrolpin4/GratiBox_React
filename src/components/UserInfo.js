import { useState } from "react";
import { IoArrowDown} from "react-icons/io5";

const Option = ({content, options}) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <div className = {isVisible ? "option" : "option mb-tiny"}>
                <p className = "option__title">
                    {
                        content === "plan" ? 
                        "Plan" : 
                        content === "sign-date" ? 
                        "Sign Date" : 
                        content === "deliveries" ? 
                        "Next Deliveries" : 
                        "Wanna Receive"
                    }
                </p>
                <IoArrowDown onClick = {() => setIsVisible(!isVisible)} size = {20} 
                    className = {isVisible ? "option__arrow active": "option__arrow"}/>
            </div>
            <div className = {isVisible ? "option__checkbox active mb-tiny" : "option__checkbox"}>
                {
                    options.map((op, i) => (
                        <>
                            {
                                <div className = "option__checkbox--flex" key = {i}>
                                    <p>{content === 'products' ? op.name : op}</p>
                                </div> 
                            }
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Option