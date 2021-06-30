import React, { useEffect, useState } from 'react';
import useInputForm from '../../../hooks/useInputForm';
import axios from 'axios';
import { countryAPI, goToLastPage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import { useGetTrips, sendPostTrips } from '../../../requests/Request';
import useApplicationForm from '../../../hooks/useApplicationForm';
import styles from '../../../styles/components/ApplicationFormPage.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Mars from '../../../assets/mars.png';
import Jupiter from '../../../assets/jupiter.png';
import Netuno from '../../../assets/netuno.png';
import Plutao from '../../../assets/plutao.png';

function ApplicationFormPage() {

    document.title = "LabeX | Cadastro de Viagem";
    const [countryId, setCountryId] = useInputForm("");
    const [country, changeCountry] = useState([]);
    const history = useHistory();
    const listaDeItem = useGetTrips([], '/trips');
    const { body, onChange, clear } = useApplicationForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })


    const photoIcon = (planet) => {
        console.log(planet)
        switch (planet) {
            case 'S974yllfKBYvtmRLJGWc':
                return <img src={Mars} alt="" />
            case 'NWDbu9pDp3mb2v6cttJP':
                return <img src={Netuno} alt="" />
            case 'fLYHtlmXb1wO8nwQFmwd':
                return <img src={Jupiter} alt="" />
            case 'GQaf4g7Fb1YsY37gUzDM':
                return <img src={Plutao} alt="" />
            default:
                return "";

        }
    }

    useEffect(() => {
        getAllCountry();
    }, [])

    const onClickSend = (e) => {
        e.preventDefault()
        sendPostTrips(countryId, body)
        clear();
    }

    const getAllCountry = () => {
        axios.get(countryAPI)
            .then(res => {
                changeCountry(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className={styles.formContainer}>
            <div>
                <h1>Pagina de formulário</h1>
                <div>
                    <form onSubmit={onClickSend} className={styles.formItems}>

                        <TextField
                            value={countryId}
                            onChange={setCountryId}
                            id="standard-select-currency"
                            select
                            label="Selecione um planeta"
                            required
                            style={{
                                width: "80%",
                                margin: "0 auto"
                            }}
                        >
                            <option disabled defaultValue=""></option>
                            {listaDeItem && listaDeItem.length > 0 ? (
                                listaDeItem.map((trip => {
                                    const { id, planet } = trip;
                                    return (<option key={id} value={id}>{planet}</option>)
                                }))
                            ) : <option>Carregando...</option>
                            }
                        </TextField>

                        <div className={styles.formAlign}>
                            <div className={styles.formLeftSide}>

                                <TextField
                                    id="outlined-basic"
                                    label="Nome"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0,2)",
                                        color: "white",
                                        margin: "5px"
                                    }}
                                    color="white"
                                    name={"name"}
                                    value={body.name}
                                    onChange={onChange}
                                    pattern={"^.{3,}$"}
                                    title={"O nome deve ter no mínimo 3 caracteres"}
                                    required
                                />


                                <TextField
                                    id="outlined-basic"
                                    label="Profissão"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0,2)",
                                        color: "white",
                                        margin: "5px"
                                    }}
                                    name={"profession"}
                                    onChange={onChange}
                                    value={body.profession}
                                    required
                                    pattern={"^.{10,}$"}
                                    title={"A profissão deve ter no mínimo 10 caracteres"}
                                />


                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Selecione o seu pais"
                                    onChange={onChange}
                                    name={"country"}
                                    value={body.country}
                                    required>
                                    <option></option>
                                    {country ? country.map(pais => {
                                        return <option key={pais.name} value={pais.name}>{pais.name}</option>
                                    }) : <p>Carregando</p>}
                                </TextField>


                                <TextField
                                    placeholder="Texto de candidatura"
                                    onChange={onChange}
                                    name={"applicationText"}
                                    multiline
                                    rows={4}
                                    value={body.applicationText}
                                    required
                                    pattern={"^.{30,}$"}
                                    title={"O texto deve ter no mínimo 30 caracteres"}
                                />
                            </div>

                            <div className={styles.formRightSide}>
                                <TextField
                                    id="outlined-basic"
                                    label="Idade"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0,2)",
                                        color: "white",
                                        margin: "5px"
                                    }}
                                    placeholder={"Idade"}
                                    name={"age"}
                                    type={"number"}
                                    onChange={onChange}
                                    value={body.age}
                                    required
                                    min={18}
                                />
                                <div className={styles.planetPhoto}>
                                    {photoIcon(countryId)}
                                </div>

                            </div>
                        </div>
                        <div className={styles.formBottons}>
                            <Button variant="outlined" color="primary" style={{ color: "black" }} size="large" type={"submit"}>ENVIAR</Button>
                            <Button variant="outlined" style={{ color: "black" }} size="large" onClick={() => goToLastPage(history)}>Voltar</Button>
                        </div>

                    </form>

                </div>
            </div>

        </div >
    )
}
export default ApplicationFormPage;