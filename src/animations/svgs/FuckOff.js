import FuckOffJson from "../json/fuckOff.json"
import Lottie from "react-lottie";

const fuckOffOptions = {
    loop: true,
    autoplay: true, 
    animationData: FuckOffJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const FuckOff = ({size}) => (
    <div className = "fuckOff">
        <Lottie
            options={fuckOffOptions}
            width={size}
            height={"auto"}
            isStopped={false}
            isPaused={false}
        />
    </div>
)

export default FuckOff