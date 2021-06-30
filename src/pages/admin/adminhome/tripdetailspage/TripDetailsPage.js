import React from 'react';
import { useGetTrips, deleteTrip } from '../../../../requests/Request';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../../../hooks/useProtectedPage';
import { goToHomePage, goToCreateTripPage, goToAdminPage } from '../../../coordinator';

function TripDetailsPage() {

    document.title = "LabeX | Detalhe de Viagens";
    useProtectedPage();
    const history = useHistory();
    const tripList = useGetTrips([], "/trips");

    const Logout = () => {
        localStorage.clear("token");
        history.push("/login")
    }

    const onSubmitTrip = (id) => {
        if (id) {
            history.push(`/admin/trips/list/${id}`)
        }
    }

    const deleteSelectedTrip = (id) => {
        deleteTrip(id)
        goToAdminPage(history)
    }

    return (
        <div>
            <h1>Oi, eu sou a TripDetailsPage</h1>
            {tripList && tripList.length && tripList.length > 0 ? (

                tripList.map((trip => {
                    return (
                        <div key={trip.id}>
                            <div>
                                <p>{trip.name}</p>
                                <button onClick={() => onSubmitTrip(trip.id)}>ver Detalhes</button>
                                <button onClick={() => deleteSelectedTrip(trip.id)}>APAGAR</button>
                            </div>
                        </div>
                    )
                }))
            ) : <p>Carregando</p>
            }
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={Logout}>sair</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar</button>

        </div>


    )
}
export default TripDetailsPage;