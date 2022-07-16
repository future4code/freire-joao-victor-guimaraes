
import { useNavigate } from "react-router-dom"
import { goBack, goToApplicationPage } from "../../Routes/Coordinator";
import { CardTrip } from "../../Component/CardTrip/CardTrip";
import { useGetData } from "../../Hooks/useGetData";
import {DivCard,Div} from "./styled.js"

export function ListTripPage() {

    const navigate = useNavigate();

    const todasTrips = useGetData()

    const listTrips = todasTrips.map((trip) => {
        return <CardTrip key={trip.id}
            name={trip.name}
            description={trip.description}
            planet={trip.planet}
            duration={trip.durationInDays}
            date={trip.date}
        />
    })

    return (
        <Div>
            <p>Area Viagens</p>

            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationPage(navigate)}>Inscrever-se</button>
            <DivCard>{listTrips}</DivCard>

        </Div>
    )

}