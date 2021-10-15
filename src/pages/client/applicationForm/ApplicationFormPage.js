import React, { useEffect } from "react";
import { goToLastPage } from "../../coordinator";
import { useHistory, useParams } from "react-router-dom";
import { sendPostTrips } from "../../../requests/Request";
import useApplicationForm from "../../../hooks/useApplicationForm";
import styles from "../../../styles/components/ApplicationFormPage.module.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import PhotoIcon from "../../../components/PhotoIcon/PhotoIcon";
import TextInput from "../../../components/TextInput/TextInput";
import DefaultButton from "../../../components/Button/Button";
import { countries } from "../../../config/constants";

function ApplicationFormPage() {
  document.title = "LabeX | Cadastro de Viagem";
  const history = useHistory();
  const params = useParams();

  const { body, onChange, clear } = useApplicationForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const onClickSend = (e) => {
    const id = localStorage.getItem("planetId");
    e.preventDefault();
    sendPostTrips(id, body);
    clear();
  };

  useEffect(() => {
    console.log(body);
  }, [body]);
  return (
    <div className={styles.formContainer}>
      <div>
        <h1>Pagina de formulário</h1>
        <div>
          <form onSubmit={onClickSend} className={styles.formItems}>
            <div className={styles.formAlign}>
              <div className={styles.formLeftSide}>
                <TextInput
                  placeholder="Digite seu nome"
                  name={"name"}
                  value={body.name}
                  onChange={onChange}
                  pattern={"^.{3,}$"}
                  title={"O nome deve ter no mínimo 3 caracteres"}
                  required
                />

                <TextInput
                  placeholder="Digite sua profissão"
                  variant="outlined"
                  size="small"
                  name={"profession"}
                  onChange={onChange}
                  value={body.profession}
                  required
                  pattern={"^.{10,}$"}
                  title={"A profissão deve ter no mínimo 10 caracteres"}
                />

                <TextField
                  select
                  className={styles.formControl}
                  label="Pais"
                  variant="outlined"
                  value={body.contry}
                  onChange={onChange}
                >
                  {countries.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Texto de candidatura"
                  placeholder="Fale mais sobre você"
                  className={styles.formControl}
                  onChange={onChange}
                  variant="outlined"
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
                <TextInput
                  id="outlined-basic"
                  variant="outlined"
                  //   className={classes.root}
                  size="small"
                  placeholder={"Idade"}
                  name={"age"}
                  type="number"
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
              <DefaultButton type={"submit"}>ENVIAR</DefaultButton>
              <DefaultButton function={() => goToLastPage(history)}>
                Voltar
              </DefaultButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ApplicationFormPage;
