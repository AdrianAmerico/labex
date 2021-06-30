import React from 'react';
import { useGetTrips } from '../../../requests/Request';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import styles from '../../../styles/components/ListTripsPage.module.scss';
import { goToFormPage, goToLastPage } from '../../coordinator';
import Mars from '../../../assets/mars.png';
import Jupiter from '../../../assets/jupiter.png';
import Netuno from '../../../assets/netuno.png';
import Plutao from '../../../assets/plutao.png';
import Button from '@material-ui/core/Button';

function ListTripsPage() {
    document.title = "LabeX | Lista de Viagens";
    const history = useHistory();
    const listaDeItem = useGetTrips([], '/trips')

    const photoIcon = (planet) => {
        console.log(planet)
        switch (planet) {
            case 'Marte':
                return <img src={Mars} alt="" />
            case 'Netuno':
                return <img src={Netuno} alt="" />
            case 'Jupiter':
                return <img src={Jupiter} alt="" />
            default:
                return <img src={Plutao} alt="" />
        }
    }
    return (
        <div className={styles.TripsContainer}>
            <h1>Inscreva-se !</h1>

            <section className={styles.ItemsSection}>
                {listaDeItem.length > 0 ? (
                    listaDeItem.map((trip => {

                        return (
                            <div className={styles.travelContainer} key={trip.id}>

                                <div className={styles.leftSide}>
                                    {photoIcon(trip.planet)}
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
                    <Button variant="outlined" color="primary" style={{ color: "#f2f4f5" }} size="large" onClick={() => goToFormPage(history)}>Inscrever</Button>
                    <Button variant="outlined" color="primary" style={{ color: "#f2f4f5" }} size="large" onClick={() => goToLastPage(history)}>Voltar</Button>
                </div>

            </section>
        </div>
    )
}
export default ListTripsPage;