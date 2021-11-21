import API from "./api";
import BearerToken from "./bearer";

const getPlans = async (token) => {
    let status;
    let serverError;

    const result = await API.get("plans-options", BearerToken(token))
        .catch(err => {
            if(err.response){
                status = err.response.status;
                return status
            }
    
            serverError = {
                success: false,
                message: "It looks like our server is not okay, we'll fix it ASAP!!"
            }     
    
        });

    if(status === 401)return {
        success: false,
        message: `It looks like your token is not a valid or has expired`,
    }

    if(result.data) return {
        success: true,
        data: result.data,
    }

    return serverError;
}

const postSignature = async (signature, token) => {
    let status;
    let serverError;
    console.log(signature);

    const result = await API.post("plans-options", signature, BearerToken(token))
        .catch(err => {
            if(err.response){
                status = err.response.status;
                return err.response
            }
    
            serverError = {
                success: false,
                message: "It looks like our server is not okay, we'll fix it ASAP!!"
            }     
        });

    if(status === 401)return {
        success: false,
        message: `It looks like your token is not a valid or has expired`,
    }

    if(status === 400) return {
        success: false,
        message: result.data.message,
    }

    if(result.status === 201) return {
        success: true,
    }

    return serverError;
}

export {
    getPlans,
    postSignature,
}