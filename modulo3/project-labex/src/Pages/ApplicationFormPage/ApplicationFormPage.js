import React from "react";
import { country } from "../../Component/ListCountries/ListCountries";
import { useGetData } from "../../Hooks/useGetData";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../Routes/Coordinator";


export function ApplicationFormPage() {
    const navigate = useNavigate();
    const allListTrips = useGetData();
    const CountriesList = country();

    const mapPaises = CountriesList.map((mps, index) => <option
        key={index}
        value={mps}>
        {mps}
    </option>
    )

    const mapNameTripAndId = allListTrips.map((trip, index) => {
        return <option
            key={index}
            value={trip.id}>
            {trip.name}
        </option>
    })







    return (
        <form>
            <p>Inscreva-se para uma viagem</p>
            <label>

                Escolha a viagem:&nbsp;
                <select name="country">
                    <option value="">Selecione a viagem</option>
                    &nbsp;
                    {mapNameTripAndId}
                </select>
            </label>



            <br />
            <label>
                País de origem:&nbsp;
                <select placeholder="País" name="country">
                    <option value="">Escolha o pais de origem</option>
                    &nbsp;
                    {mapPaises}
                </select>
            </label>
            <br />
            <label>
                Nome:&nbsp;
                <input placeholder="Nome" type="text" />
            </label>
            <br />
            <label>
                Idade:&nbsp;
                <input placeholder="Idade" type="Number" />
            </label>
            <br />
            <label>
                Texto de Candidatura:&nbsp;
                <input placeholder="Texto de Candidatura" type="text" />
            </label>
            <br />
            <label>
                Profissão:&nbsp;
                <input placeholder="Profissão" type="text" />
            </label>
            <br />

            <br />



            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Enviar Inscrição</button>

        </form>
    )

}