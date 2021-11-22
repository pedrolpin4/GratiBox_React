import ComingSoonJson from "../json/coming-soon.json"
import Lottie from "react-lottie";
import { useNavigate } from "react-router";



const ComingSoon = () => {
    const comingSoonOptions = {
        loop: true,
        autoplay: true, 
        animationData: ComingSoonJson,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
    const navigate = useNavigate()

    return (
        <div className = "fuckOff">
            <Lottie
                options={comingSoonOptions}
                width={"auto"}
                height={"auto"}
                isStopped={false}
                isPaused={false}
            />
            <div className = "home__btn black" onClick = {() => {
                navigate("/user-signature")
            }}>
                Your Signature
            </div>
        </div>
    )
}

export default ComingSoon