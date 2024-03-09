import axios, { AxiosResponse } from "axios";

interface Props {
    username: string;
    password: string;
}

function Login(props: Props): AxiosResponse {
    let data;

    axios.get("/bibleCamp/users.php?username=" + props.username + "&password=" + props.password).then((res) => {
        data = res.data;
    });

    return data;
}

export default Login;