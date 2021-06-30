import React, { useState } from 'react';
import { goToHomePage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import useLoginHook from '../../../hooks/useLoginHook';
import { useLogin } from '../../../requests/Request';
import styles from '../../../styles/components/LoginPage.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


function LoginPage() {
    document.title = "LabeX | Login";
    const history = useHistory();
    const [bodyData, handleBodyData] = useLoginHook({ email: "", password: "" });

    const Login = useLogin([], '/login', bodyData);

    const fazerLogin = (event) => {
        event.preventDefault();
        Login();
    }

    return (
        <div className={styles.loginContainer}>

            <form onSubmit={fazerLogin} className={styles.formLogin}>
                <h1>Login Page</h1>
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    placeholder="E-Mail"
                    value={bodyData.email}
                    type={"email"}
                    name={"email"}
                    color="secondary"
                    onChange={handleBodyData}
                    required
                />

                <TextField
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    placeholder="senha"
                    name="password"
                    color="secondary"
                    value={bodyData.password}
                    type={"password"}
                    onChange={handleBodyData}
                    pattern={"^.{3,}"}
                    required
                />

                <div className={styles.formBottons}>
                    <Button variant="outlined" color="secondary" style={{ color: "white" }} size="large" type={"submit"}>ENVIAR</Button>
                    <Button variant="outlined" color="secondary" style={{ color: "white" }} size="large" onClick={() => goToHomePage(history)}>Voltar</Button>
                </div>

            </form>

        </div >
    )
}
export default LoginPage;


