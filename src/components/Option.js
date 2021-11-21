import { useState } from "react";
import { IoArrowDown, IoCheckmark } from "react-icons/io5";

const Option = ({content, setOption, options, option}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className = {isVisible ? "option" : "option mb-tiny"}>
                <p className = "option__title">
                    {
                        content === "delivery" ? 
                        "Delivery" : 
                        content === "plans" ? 
                        "Plans" : 
                        "Wanna Receive"
                    }
                </p>
                <IoArrowDown onClick = {() => setIsVisible(!isVisible)} size = {20} 
                    className = {isVisible ? "option__arrow active": "option__arrow"}/>
            </div>
            <div className = {isVisible ? "option__checkbox active mb-tiny" : "option__checkbox"}>
                {
                    options.map((op) => (
                        <>
                            {
                                <div className = "option__checkbox--flex" key = {op.id}>
                                    <div className = {isVisible ? "option__white-square active" : "option__white-square"}
                                       onClick = {() =>{
                                            if(content === 'products'){
                                                if(!option.includes(op.id)){
                                                    setOption([...option, op.id])
                                                    return;
                                                }
    
                                                setOption(option.filter(opt => opt !== op))
                                                return;
                                            }
    
                                            setOption(op.id)
                                        }
                                    }>
                                        <IoCheckmark size = {20} color = {"green"} 
                                            className = {
                                                content === 'products' ?
                                                option.includes(op.id) ? "option__check active" : "option__check" :
                                                option === op.id ? "option__check active" : "option__check" 
                                            }
                                            />
                                    </div>
                                    <p onClick = {() =>{
                                        if(content === 'products'){
                                            if(!option.includes(op.id)){
                                                setOption([...option, op.id]);
                                                return;
                                            }

                                            setOption(option.filter(opt => opt !== op.id))
                                            return;
                                        }

                                        setOption(op.id)
                                    }}>{op.name || op.day}</p>
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