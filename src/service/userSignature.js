import API from "./api";
import BearerToken from "./bearer";

const getSignature = async (token) => {
    let status;
    let serverError;

    const result = await API.get("user-signature", BearerToken(token))
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

    if(status === 403)return {
        success: false,
        message: `It looks like you don't have a signature yet`,
    }


    if(result.data) return {
        success: true,
        data: result.data,
    }

    return serverError;    
}

export default getSignature