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
                Receba em casa um box com chás, produtos organicos, incensos e muito mais...
            </p>
            <img className = "home__image" alt = "GratiBox, be zen" src = "assets/image05.webp"/>
            <div className = "home__ghostbg"></div>
            <div className = "home__btn" onClick = {() => {
                setIsSigningIn(false);
                navigate("/register");
            }}>
                Quero começar
            </div>
            <p className = "home__switcher" onClick = {() => {
                navigate("/register");
                setIsSigningIn(true);
            }}>
                Já sou grato
            </p>
        </div>
    )
}

export default HomePage