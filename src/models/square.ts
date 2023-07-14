import axios from "axios";
import { putSquareCredentials } from "./mongo";

const base_url = process.env.SQUARE_API_BASE_URL;

function obtainSquareToken(code: string) {
    return axios.post( base_url + '/oauth2/token',
    {
        code,
        client_id: process.env.SQUARE_APP_ID,
        client_secret: process.env.SQUARE_APP_SECRET,
        grant_type: "authorization_code"
    } 
    ).then( res => {
        console.log(res);
        putSquareCredentials(res.data)
    }).catch( error => {
        console.log("Error making request to square to obtain token");
        console.log(error);
    })
}


export { 
    obtainSquareToken,
}