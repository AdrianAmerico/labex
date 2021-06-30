import { goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { useListTripsDetails } from '../../../requests/Request';
import useProtectedPage from '../../../hooks/useProtectedPage';

function TripListPage() {
    useProtectedPage()
    const params = useParams();
    const history = useHistory();
    const [tripDetails, getTripDetails] = useListTripsDetails(`/trip/${params.id}`);

    const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((c) => {
        return <li key={c.id}>{c.name}</li>
    })

    return (
        <div>

            <h1>Candidatos para viagem</h1>

             {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
            {tripDetails && tripDetails.trip && <div>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </div>}

            <h2>Candidatos Aprovados</h2>
            {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}

            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}
export default TripListPage