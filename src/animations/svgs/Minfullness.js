import Lottie from "react-lottie";
import MindFullnessJson from "../json/mindfullness.json"

const mindfullnessOptions = {
    loop: true,
    autoplay: true, 
    animationData: MindFullnessJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const Mindfullness = ({size}) =>(
    <Lottie
        options={mindfullnessOptions}
        width={size}
        height={"auto"}
        isStopped={false}
        isPaused={false}
    />
)

export default Mindfullness