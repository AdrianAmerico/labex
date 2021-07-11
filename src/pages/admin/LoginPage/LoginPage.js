import React from 'react';
import { goToHomePage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import useLoginHook from '../../../hooks/useLoginHook';
import { useLogin } from '../../../requests/Request';
import styles from '../../../styles/components/LoginPage.module.scss';
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
                <h2>Área Administrativa</h2>
                <br />
                <TextInput
                    label="E-mail"
                    type="email"
                    name="email"
                    value={bodyData.email}
                    onChange={handleBodyData}
                />
                <br />
                <TextInput
                    label="Senha"
                    type="password"
                    name="password"
                    value={bodyData.email}
                    onChange={handleBodyData}
                    pattern={"^.{3,}"}
                />

                <div className={styles.formBottons}>
                    <DefaultButton type="submit">Enviar</DefaultButton>
                    <DefaultButton function={() => goToHomePage(history)}>Voltar</DefaultButton>
                </div>
            </form>
        </div>
    )
}
export default LoginPage;

