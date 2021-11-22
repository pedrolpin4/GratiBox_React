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

const FuckOff = () => (
    <div className = "fuckOff">
        <h1 className = "fuckOff__label"> Às vezes é bom largar um</h1>
        <Lottie
            options={fuckOffOptions}
            width={"auto"}
            height={"auto"}
            isStopped={false}
            isPaused={false}
        />
    </div>
)

export default FuckOff