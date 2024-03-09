import axios, { AxiosResponse } from "axios";

interface Props {
    username: string;
    password: string;
}

const login = async (props: Props) => {
    try {
        const response: AxiosResponse = await axios.get("/bibleCamp/users.php?username=" + props.username + "&password=" + props.password);
        const responseData = response.data;
        
        return responseData;
    } catch (error) {
    }
}

export default login;