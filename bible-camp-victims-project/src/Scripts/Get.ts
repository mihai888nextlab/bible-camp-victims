import axios, { AxiosResponse } from "axios";
//import { useEffect } from "react";

interface Props {
    type: number;
    line: string | undefined;
    details: number;
    date: number;
}
    
const fetchData = async () => {
    
    try {
    
        const response: AxiosResponse = await axios.get('/bibleCamp/get.php');
    
        const responseData: Props = response.data;

        return responseData;
    
    // Process the response data
    
    } catch (error) {
    
    // Handle the error
    
    }
    
    };



export default fetchData;