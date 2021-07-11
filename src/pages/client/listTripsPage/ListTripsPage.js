import React, { useContext } from 'react';
import { useGetTrips } from '../../../requests/Request';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import styles from '../../../styles/components/ListTripsPage.module.scss';
import { goToLastPage } from '../../coordinator';
import PhotoIcon from '../../../components/PhotoIcon/PhotoIcon';
import Button from '@material-ui/core/Button';
import GlobalStateContext from '../../../global/GlobalStateContext';
function ListTripsPage() {
    document.title = "LabeX | Lista de Viagens";
    const history = useHistory();
    const listaDeItem = useGetTrips([], '/trips')
    const teste = (planet) => {
        localStorage.setItem("planetId", planet[1])
        history.push(`/trips/application/${planet[0]}`)
    }

    return (
        <div className={styles.TripsContainer}>
            <h1>Inscreva-se !</h1>

            <section className={styles.ItemsSection}>
                {listaDeItem.length > 0 ? (
                    listaDeItem.map((trip => {

                        return (
                            <div className={styles.travelContainer} key={trip.id} onClick={() => teste([trip.planet, trip.id])}>

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
                    <Button variant="outlined" color="primary" style={{ color: "#f2f4f5" }} size="large" onClick={teste}>Inscrever</Button>
                    <Button variant="outlined" color="primary" style={{ color: "#f2f4f5" }} size="large" onClick={() => goToLastPage(history)}>Voltar</Button>
                </div>

            </section>
        </div>
    )
}
export default ListTripsPage;