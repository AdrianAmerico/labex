import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminPage } from '../../../coordinator';
import useProtectedPage from '../../../../hooks/useProtectedPage';
import { createTrip, useGetTrips } from '../../../../requests/Request';
import useApplicationForm from '../../../../hooks/useApplicationForm';

function CreateTripPage() {
    const history = useHistory();
    useProtectedPage();
    const planetList = useGetTrips([], '/trips');
    const { body, onChange, clear } = useApplicationForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
        ("0" + (today.getMonth() + 1)).substr(-2) + "-"
        + ("0" + today.getDate()).substr(-2)

    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(body, clear)
        clear()
    }

    return (
        <div>
            <h1>Postar Viagens</h1>
            <form onSubmit={onClickCreate}>
                <input
                    placeholder="nome"
                    name="name"
                    value={body.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title="Nome da viagem precisa de no minimo 5 caracteres !"
                    required
                />

                <select
                    placeholder="Planeta"
                    name="planet"
                    defaultValue=""
                    onChange={onChange}
                    required
                >
                    <option value="" disabled>Escolha um Planeta</option>
                    {planetList && planetList.length > 0 ? (
                        planetList.map((planet => {
                            return (<option key={planet.id} value={planet.planet}>{planet.planet}</option>
                            )
                        }))
                    ) : <option>Carregando...</option>
                    }
                </select>

                <input
                    placeholder="data"
                    type="date"
                    name="date"
                    value={body.date}
                    onChange={onChange}
                    required
                    min={stringToday}
                />

                <input
                    placeholder="descricao"
                    name="description"
                    value={body.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title="A descrição precisa ter ao menos 30 caracteres"
                />

                <input
                    placeholder="duração"
                    type="number"
                    name="durationInDays"
                    onChange={onChange}
                    value={body.durationInDays}
                    required
                    min={50}
                />
                <button type="submit">Criar</button>
            </form>
            {/* <button onClick={onClickCreate}>Criar</button> */}
            <button onClick={() => goToAdminPage(history)}>Voltar</button>
        </div>
    )
}
export default CreateTripPage;
