import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, goToAdminPage } from '../pages/coordinator';
import { useHistory } from 'react-router-dom';

export const useGetTrips = (initialState, url) => {
    const [trips, setTrips] = useState(initialState);

    const getTripsData = () => {
        axios.get(`${BASE_URL}${url}`)
            .then((res => {
                setTrips(res.data.trips)
            }))
            .catch((err => {
                setTrips(err.response)
            }))
    }
    useEffect(() => {
        getTripsData();
    }, []);

    return trips;
}

export const sendPostTrips = (id, body) => {
    axios.post(`${BASE_URL}/trips/${id}/apply`, body)
        .then(() => {
            alert("Formulário enviado com sucesso. Boa sorte!")

        }).catch((err) => {
            console.log(err.response)
            alert("Por favor preencha todos os campos e tente novamente.")
        })
}

export const useLogin = (initialState, url, body) => {

    const [data, setData] = useState(initialState);
    const history = useHistory();

    const postUseLogin = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then(res => {
                setData(res.data);
                localStorage.setItem("token", res.data.token);
                history.push("/admin/trips/list")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        return data
    }
    return postUseLogin;
}

export const useGetTripsDetails = (initialState, id) => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState(initialState)

    const getTrip = () => {
        axios.get(`${BASE_URL}/trip/${id}`, { headers: { auth: token } })
            .then(res => {
                setData(res.data.trip)

            })
            .catch(err => {
                alert(err.message)
            })
        return data
    }
    return getTrip
}

export const useListTripsDetails = (id, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => alert(err.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [id])

    return [data, getData]
}

export const createTrip = (body) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: { auth: localStorage.getItem("token") }
    })
        .then(() => {
            alert("Viagem criada com sucesso !")
        })
        .catch((err) => {
            alert(err.response.data)
        })

}

export const deleteTrip = (id) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
        .then(() => {
            alert("Viagem deletada com sucesso!")
        })
        .catch((err) => alert(err.response.data.message))
}
