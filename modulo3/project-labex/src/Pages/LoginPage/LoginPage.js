import React, { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../../Constantes/URL_BASE";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../Routes/Coordinator";


export function LoginPage() {
    const navigate = useNavigate();

    cosnt [email, setEmail] = useState("")
    cosnt [password, setPassword] = useState("")

    // // Aqui tentei utilizar o Form Operator
    // const [form, setForm] = useState({ email: "", password: "" })


    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePassword=(e)=>{
        setPassword(e.target.value)
    }


    // Aqui tentei utilizar o Form Operator
    // const requestForm = (e) => {
    //     // const {name,value} = e.target
    //     setForm({ ...form, [e.target.name]: e.target.value })
    //     // setForm({...form,[name]:value})
    // }

    const Login = (e) => {
        e.prevetDefault()

        
        const body = {
            email:email,
            passoword:password
        }

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
            <h1>Area login</h1>



               <input
                    name="email"
                    placeholder="Digite seu email"
                    type="email"
                    value={email}
                    onChange={changeEmail}
                    required
                />
                <br /> <br />


                <input
                    name="password"
                    placeholder="Password"
                    // type="password"
                    value={password}
                    onChange={changePassword}
                    required
                />

                <br />    <br />    <br />
                <button onClick={Login}>Login</button>

            
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )

}
