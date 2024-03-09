import axios from "axios";

interface Props {
    username: string;
    password: string;
}

function Login(props: Props) {
    axios.get("/bibleCamp/users.php?username=" + props.username + "&password=" + props.password).then((res) => {
        if (res.data.lenght == 0) {
            return res.data
        }
    })
}

export default Login;