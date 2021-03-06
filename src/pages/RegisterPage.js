import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router";
import { postSignIn, postSignUp } from "../service/registration";

const RegisterPage = ({isSigningIn, setIsSigningIn}) => {
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('')

    const formsSignIn = {
        email,
        password
    }

    const formsSignUp = {
        name,
        email,
        password,
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await postSignIn(formsSignIn);
        
        if(result.success){
            setUserData(result.data)
            localStorage.setItem("gratiboxLogin", JSON.stringify(result.data));

            setIsSigningIn(false)
            navigate("/signatures")
            return;
        }
        setMessage(result.message)

        return;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        if(password !== repeatPassword){
            setMessage('Your password and its confirmation are not the same')
            return;
        }

        const result = await postSignUp(formsSignUp);
        
        if(result.success){
            setIsSigningIn(true)
            return;
        }

        setMessage(result.message)
        return;
    }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('gratiboxLogin'))?.user["signature_id"]){
            navigate('/user-signature');
            return;
        }
    }, [navigate])

    return(
        <div className = "register">
            <h1 className = "register__title">
                Welcome to <span className = "bold">GratiBox</span>
            </h1>
            <form className = "register__form" onSubmit = {isSigningIn ? handleLogin : handleSignUp}>
                {
                    isSigningIn ?
                    <>
                        <input className = "register__form--input mb-tiny" placeholder = "Email" type = "email"
                            value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                        <input className = "register__form--input  mb-huge" placeholder = "Password [6-15 characters]" type = "password" 
                            value = {password} onChange = {(e) => setPassword(e.target.value)} pattern = ".{6,11}"/>
                        <p className = "error-message white mb-small">{message}</p>
                    </>
                    :
                    <>
                        <input className = "register__form--input mb-tiny" placeholder = "Name"
                            value = {name} onChange = {(e) => setName(e.target.value)}/>
                        <input className = "register__form--input mb-tiny" placeholder = "Email" type = "email"
                            value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                        <input className = "register__form--input mb-tiny" placeholder = "Password [6-15 characters]" type = "password" 
                            value = {password} onChange = {(e) => setPassword(e.target.value)} pattern = ".{6,11}"/>
                        <input className = "register__form--input mb-big" placeholder = "Repeat your Password" type = "password" 
                            value = {repeatPassword} onChange = {(e) => setRepeatPassword(e.target.value)} pattern = ".{6,11}"/>
                        <p className = "error-message white mb-small">{message}</p>
                    </>
                }
                <button className = "register__form--button mb-small" type = "submit">
                    {isSigningIn ? "Login" : "Sign Up"}
                </button>
            </form>
            <p className = "register__switcher" onClick = {() => setIsSigningIn(prev => !prev)}>
                {isSigningIn ? "I am not grateful yet" : "I am already grateful"}
            </p>
        </div>
    )
}

export default RegisterPage