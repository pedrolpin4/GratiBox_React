import LoadingAnimationJson from "../json/loading.json"
import Lottie from "react-lottie";

const loadingOptions = {
    loop: true,
    autoplay: true, 
    animationData: LoadingAnimationJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const LoadingAnimation = ({size}) => (
    <Lottie
        options={loadingOptions}
        width={size}
        height={"auto"}
        isStopped={false}
        isPaused={false}
    />
)

export default LoadingAnimation