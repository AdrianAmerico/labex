import React from 'react';
import { useHistory } from 'react-router';
import { goToListTrips, goToAdminPage } from '../coordinator';
import Button from '@material-ui/core/Button';
import style from '../../styles/components/HomePage.module.scss';
import SpaceShip from '../../assets/spaceShip.png';
import DefaultButton from '../../components/Button/Button';

function HomePage() {
    document.title = "LabeX | Homepage";
    const history = useHistory();
    return (
        <div className={style.homePageContainer}>
            <div className={style.cardHomePage}>
                <h1>Selecione uma opçao</h1>
                <img src={SpaceShip} alt="" />
                <div className={style.buttonContainer}>
                    <DefaultButton function={() => goToListTrips(history)}>Viagens</DefaultButton>
                    <DefaultButton function={() => goToAdminPage(history)}>Admin</DefaultButton>
                </div>
            </div>
        </div >
    );
};
export default HomePage;