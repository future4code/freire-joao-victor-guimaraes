import React, { useState } from "react";
import  axios from "axios";
import { URL_BASE } from "../../Constantes/URL_BASE";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../Routes/Coordinator";


export function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }


    const Login = () => {
        console.log(email, password);
        const body = {
            email: email,
            password: password
        };
       
       axios
        .post( 
            `${URL_BASE}/login`, 
        body
        )

            .then((res) => {
                console.log("Deu certo: ", res.data);
                localStorage.setItem("token", res.data.token);
                navigate("/Admin")
            })
            .catch((error) => {
                console.log("Deu errado: ", error.message);
            });


    };


    return (
        <div>
            <p>Area login</p>

            <label>E-mail:</label>
            <input
                placeholder="Digite seu email"
                type="email"
                value={email}
                onChange={onChangeEmail}

            />
            <br /> <br />

            <label>Password:</label>
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={onChangePassword}
            /> <br />
            <br />
            <br />


            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={Login}>Login</button>

        </div>
    )

}
