import React from 'react';
import { useHistory } from 'react-router';
import { goToListTrips, goToAdminPage } from '../coordinator';
import Button from '@material-ui/core/Button';
import style from '../../styles/components/HomePage.module.scss';
import SpaceShip from '../../assets/spaceShip.png';

function HomePage() {
    document.title = "LabeX | Homepage";
    const history = useHistory();
    return (
        <div className={style.homePageContainer}>
            <div className={style.cardHomePage}>
                <h1>Selecione uma opçao</h1>
                <img src={SpaceShip} alt="" />
                <div className={style.buttonContainer}>
                    <Button variant="outlined" color="primary" style={{ color: "#f2f4f5" }} size="large" onClick={() => goToListTrips(history)}>Viagens</Button>
                    <Button variant="outlined" color="primary" style={{ color: "#f2f4f5" }} size="large" onClick={() => goToAdminPage(history)}>Admin</Button>
                </div>
            </div>

        </div >
    );
};
export default HomePage;