import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { countryAPI, goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { sendPostTrips } from '../../../requests/Request';
import useApplicationForm from '../../../hooks/useApplicationForm';
import styles from '../../../styles/components/ApplicationFormPage.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoIcon from '../../../components/PhotoIcon/PhotoIcon';

function ApplicationFormPage() {
    document.title = "LabeX | Cadastro de Viagem";
    const [country, changeCountry] = useState([]);
    const history = useHistory();
    const params = useParams()
    const { body, onChange, clear } = useApplicationForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    useEffect(() => {
        getAllCountry();
    }, [])

    const onClickSend = (e) => {
        const id = localStorage.getItem("planetId")
        e.preventDefault()
        sendPostTrips(id, body)
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

                        <div className={styles.formAlign}>
                            <div className={styles.formLeftSide}>

                                <TextField
                                    id="outlined-basic"
                                    label="Nome"
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0,2)",

                                        margin: "5px"
                                    }}

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
                                    <PhotoIcon planet={params.planet} />
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