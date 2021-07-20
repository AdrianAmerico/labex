import React, { useState } from 'react';
import { useGetTrips, deleteTrip } from '../../../../requests/Request';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../../../hooks/useProtectedPage';
import { goToHomePage, goToCreateTripPage, goToAdminPage } from '../../../coordinator';
import styles from '../../../../styles/components/TripDetailsPage.module.scss';
import DefaultButton from '../../../../components/Button/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import TripModal from './TripModal';
import { CircularProgress } from '@material-ui/core';

function TripDetailsPage() {
    document.title = "LabeX | Detalhe de Viagens";
    useProtectedPage();
    const history = useHistory();
    const tripList = useGetTrips([], "/trips");
    const [open, setOpen] = useState(false);

    const Logout = () => {
        localStorage.clear("token");
        history.push("/login")
    }

    const onSubmitTrip = (id) => {
        if (id) {
            history.push(`/admin/trips/list/${id}`)
        }
    }

    console.log(tripList)
    return (
        <div id={styles.tripContainer}>
            {tripList?.length && tripList.length > 0 ? (
                tripList.map((trip => {
                    return (
                        <div key={trip.id} className={styles.tripMapContainer}>
                            <div className={styles.infoItem}>
                                <div className={styles.trip__LeftSide} onClick={() => setOpen(true)} >
                                    <DeleteIcon />
                                    <p onClick={() => onSubmitTrip(trip.id)}>{trip.name}</p>
                                </div>
                                <ArrowForwardIosRoundedIcon onClick={() => onSubmitTrip(trip.id)} />
                            </div>
                            <TripModal open={open} setOpen={setOpen} id={trip.id} planet={trip.planet} name={trip.name} />
                        </div>
                    )
                }))
            ) : <div className={styles.loading}><CircularProgress color="primary" size="10rem" /></div>
            }
            <div className={styles.buttonsContainer}>
                <DefaultButton function={() => goToHomePage(history)}>Voltar</DefaultButton>
                <DefaultButton function={Logout}>sair</DefaultButton>
                <DefaultButton function={() => goToCreateTripPage(history)}>Criar</DefaultButton>
            </div>

        </div>
    )
}
export default TripDetailsPage;