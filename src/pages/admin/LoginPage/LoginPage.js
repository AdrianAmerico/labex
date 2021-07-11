import React from 'react';
import { goToHomePage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import useLoginHook from '../../../hooks/useLoginHook';
import { useLogin } from '../../../requests/Request';
import styles from '../../../styles/components/LoginPage.module.scss';
import TextField from '@material-ui/core/TextField';
import DefaultButton from '../../../components/Button/Button';
import TextInput from '../../../components/TextInput/TextInput';

function LoginPage() {
    document.title = "LabeX | Login";
    const history = useHistory();
    const [bodyData, handleBodyData] = useLoginHook({ email: "", password: "" });

    const Login = useLogin([], '/login', bodyData);

    const doLogin = (event) => {
        event.preventDefault();
        Login();
    }

    return (
        <div className={styles.loginContainer}>

            <form onSubmit={doLogin} className={styles.formLogin}>
                <h2 style={{ color: "black" }}>Administração</h2>
                <br />
                <TextInput
                    label="email"
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={bodyData.email}
                    onChange={handleBodyData} />
                <br />

                <TextInput
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    name="password"
                    value={bodyData.email}
                    onChange={handleBodyData}
                    pattern={"^.{3,}"}
                />

                {/* <TextField
                    label="Senha"
                    variant="outlined" u
                    placeholder="senha"
                    name="password"
                    color="secondary"
                    value={bodyData.password}
                    type={"password"}
                    onChange={handleBodyData}
                    pattern={"^.{3,}"}
                    required
                /> */}

                <div className={styles.formBottons}>
                    <DefaultButton type="submit">Enviar</DefaultButton>
                    <DefaultButton function={() => goToHomePage(history)}>Voltar</DefaultButton>
                </div>
            </form>
        </div>
    )
}
export default LoginPage;

