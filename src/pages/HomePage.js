import { useEffect } from "react";
import { useNavigate } from "react-router"
const HomePage = ({setIsSigningIn}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('gratiboxLogin'))){
            return;
        }

        if(JSON.parse(localStorage.getItem('gratiboxLogin'))?.user["signature_id"]){
            navigate('/user-signature');
            return;
        }

        navigate("/signatures")
    })

    return (
        <div className = "home">
            <h1 className = "home__title">
                Welcome to <span className = "bold">Gratibox</span>
            </h1>
            <p className = "home__description">
                Receive at home a box with teas, organic products, incenses and a lot more...
            </p>
            <img className = "home__image" alt = "GratiBox, be zen" src = "assets/image05.webp"/>
            <div className = "home__ghostbg"></div>
            <div className = "home__btn" onClick = {() => {
                setIsSigningIn(false);
                navigate("/register");
            }}>
                Wanna Start?
            </div>
            <p className = "home__switcher" onClick = {() => {
                navigate("/register");
                setIsSigningIn(true);
            }}>
                I'm already grateful
            </p>
        </div>
    )
}

export default HomePage