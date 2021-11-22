import Lottie from "react-lottie";
import YingYangJson from "../json/yin-yang.json"

const yingYangOptions = {
    loop: true,
    autoplay: true, 
    animationData: YingYangJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const YingYang = ({size}) =>(
    <Lottie
        options={yingYangOptions}
        width={size}
        height={"auto"}
        isStopped={false}
        isPaused={false}
    />
)

export default YingYang