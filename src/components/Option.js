import { useEffect, useState } from "react";
import { IoArrowDown, IoCheckmark } from "react-icons/io5";

const Option = ({content, setOption, options, option}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        content === "products" ?
        setOption([...options]) :
        setOption(options[0])
    }, []);

    return (
        <>
            <div className = {isVisible ? "option" : "option mb-tiny"}>
                <p className = "option__title">
                    {
                        content === "delivery" ? 
                        "Delivery" : 
                        content === "plans" ? 
                        "Plans" : 
                        "Products"
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
                                <div className = "option__checkbox--flex" key = {op + i}>
                                    <div className = {isVisible ? "option__white-square active" : "option__white-square"}
                                       onClick = {() =>{
                                            if(content === 'products'){
                                                if(!option.includes(op)){
                                                    setOption([...option, op])
                                                    return;
                                                }
    
                                                setOption(option.filter(opt => opt !== op))
                                                return;
                                            }
    
                                            setOption(op)
                                        }
                                    }>
                                        <IoCheckmark size = {20} color = {"green"} 
                                            className = {
                                                content === 'products' ?
                                                option.includes(op) ? "option__check active" : "option__check" :
                                                option === op ? "option__check active" : "option__check" 
                                            }
                                            />
                                    </div>
                                    <p onClick = {() =>{
                                        if(content === 'products'){
                                            if(!option.includes(op)){
                                                setOption([...option, op])
                                                return;
                                            }

                                            setOption(option.filter(opt => opt !== op))
                                            return;
                                        }

                                        setOption(op)
                                    }}>{op}</p>
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