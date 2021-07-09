import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { BrowserContainer, BrowserAlign } from '../styles/components/browserstyles/BrowserContainer';
import HomePage from './homepage/HomePage';
import ListTripsPage from './client/listTripsPage/ListTripsPage';
import ApplicationFormPage from './client/applicationForm/ApplicationFormPage';
import ErrorPage from '../pages/error/ErrorPage'
import TripsListPage from './admin/triplistpage/TripListPage';
import LoginPage from './admin/loginpage/LoginPage';
import TripDetailsPage from './admin/adminhome/tripdetailspage/TripDetailsPage';
import CreateTripPage from './admin/adminhome/createtrippage/CreateTripPage';
import StarfieldAnimation from 'react-starfield-animation';
import { BACKGROUND_URL } from '../pages/coordinator';

function Routes() {
    return (
        <BrowserContainer>

            <StarfieldAnimation style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${BACKGROUND_URL})`
            }} />

            <BrowserAlign>
                <BrowserRouter>
                    <Switch>

                        {/* Rota Client */}

                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route exact path="/trips/list">
                            <ListTripsPage />
                        </Route>

                        <Route exact path="/trips/application/:planet">
                            <ApplicationFormPage />
                        </Route>

                        {/* Rota Admin */}

                        <Route exact path="/admin/trips/list">
                            <TripDetailsPage />
                        </Route>

                        <Route exact path="/login">
                            <LoginPage />
                        </Route>

                        <Route exact path="/admin/trips/list/:id">
                            <TripsListPage />
                        </Route>

                        <Route exact path="/admin/trip/list/create">
                            <CreateTripPage />
                        </Route>
                        <Route>
                            <ErrorPage />
                        </Route>

                    </Switch>
                </BrowserRouter>
            </BrowserAlign>

        </BrowserContainer>
    )
}
export default Routes;
