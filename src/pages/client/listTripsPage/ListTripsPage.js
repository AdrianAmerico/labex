import React, { useContext } from 'react';
import { useGetTrips } from '../../../requests/Request';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import styles from '../../../styles/components/ListTripsPage.module.scss';
import { goToLastPage } from '../../coordinator';
import PhotoIcon from '../../../components/PhotoIcon/PhotoIcon';
import Button from '@material-ui/core/Button';
import DefaultButton from '../../../components/Button/Button';

function ListTripsPage() {
    document.title = "LabeX | Lista de Viagens";
    const history = useHistory();
    const listaDeItem = useGetTrips([], '/trips')

    const choosePlanetToTravel = (planet) => {
        localStorage.setItem("planetId", planet[1])
        history.push(`/trips/application/${planet[0]}`)
    }
    console.log(listaDeItem)

    return (
        <div className={styles.TripsContainer}>
            <h1>Inscreva-se !</h1>

            <section className={styles.ItemsSection}>
                {listaDeItem && listaDeItem.length ? (
                    listaDeItem.map((trip => {

                        return (
                            <div className={styles.travelContainer} key={trip.id} onClick={() => choosePlanetToTravel([trip.planet, trip.id])}>

                                <div className={styles.leftSide}>
                                    <PhotoIcon planet={(trip.planet)} />
                                    <div className={styles.leftSide__align}>
                                        <h2>{trip.planet}</h2>
                                        <p>{trip.name}</p>
                                        <p>{trip.description}</p>
                                    </div>
                                </div>

                                <div className={styles.RightSide}>
                                    <p>{trip.durationInDays} dias</p>
                                    <p>{trip.date}</p>
                                </div>
                            </div>
                        )
                    }))
                ) : <div className={styles.loading}><CircularProgress color="primary" size="10rem" /></div>
                }
                <div className={styles.goBackButton}>
                <DefaultButton function={() => goToLastPage(history)}>Voltar</DefaultButton>     
                </div>

            </section>
        </div>
    )
}
export default ListTripsPage;