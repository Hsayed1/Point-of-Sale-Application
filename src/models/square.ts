import axios from "axios";
import { putSquareCatalog, putSquareCredentials } from "./mongo";

const base_url = process.env.SQUARE_API_BASE_URL;

function getSquareCatalog(merchant_id: string, access_token: string) {
    return axios.get(base_url + "/v2/catalog/list", {
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        }
    }).then( res => {
        console.log(res.data);
        putSquareCatalog(merchant_id, res.data);

    }).catch( error => {
        console.log("Error making request to square to get Catalog");
        console.log(error);
    });
}

function obtainSquareToken(code: string) {
    return axios.post( base_url + '/oauth2/token',
    {
        code,
        client_id: process.env.SQUARE_APP_ID,
        client_secret: process.env.SQUARE_APP_SECRET,
        grant_type: "authorization_code"
    } 
    ).then( res => {
        console.log(res.data);
        putSquareCredentials(res.data);
        getSquareCatalog(res.data.merchant_id, res.data.access_token);

    }).catch( error => {
        console.log("Error making request to square to obtain token");
        console.log(error);
    })
}


export { 
    obtainSquareToken,
    getSquareCatalog
}