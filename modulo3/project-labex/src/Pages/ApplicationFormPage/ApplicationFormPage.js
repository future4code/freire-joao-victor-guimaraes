import React from "react";

import { useNavigate } from "react-router-dom"
import { goBack } from "../../Routes/Coordinator";


export function ApplicationFormPage() {
    const navigate = useNavigate()


    return (
        <div>
            <p>Inscreva-se para uma viagem</p>

            <select placeholder="País" name="country">
                <option value="">Afghanistan</option>

                </select>
            <label>
                Nome:
                <input placeholder="Nome" type="text"/>
            </label>
            <label>
                Idade:
                <input placeholder="Idade" type="Number"/>
            </label>
            <label>
                Idade:
                <input placeholder="Texto de Candidatura" type="text"/>
            </label>
            <label>
                Idade:
                <input placeholder="Profissão" type="text"/>
            </label>
            <label>
                Idade:
                <select placeholder="País" name="country">
                <option value="Afghanistan">Afghanistan</option>

                </select>
            </label>




            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button >Enviar</button>

        </div>
    )

}