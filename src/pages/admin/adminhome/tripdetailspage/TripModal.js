import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { goToAdminPage } from '../../../coordinator';
import { useHistory } from 'react-router-dom';
import styles from '../../../../styles/components/TripModal.module.scss';
import DefaultButton from '../../../../components/Button/Button';
import { deleteTrip } from '../../../../requests/Request';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        border: '2px solid #000',
        maxWidth: "500px",
        alignItems: "center",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TripModal({ open, setOpen, id, name, planet }) {
    const history = useHistory();
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false)
    };

    const deleteSelectedTrip = (id) => {
        deleteTrip(id)
        goToAdminPage(history)
    }

    const closeModal = () => {
        setOpen(false)
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <div id={styles.tripModalContainer}>
                        <h2 id="transition-modal-title">Você deseja mesmo apagar essa viagem ?</h2>
                        <h4>{name}</h4>
                        <h3>{planet}</h3>

                        <div className={styles.buttonsArea}>
                            <DefaultButton function={closeModal}>Voltar</DefaultButton>
                            <DefaultButton function={deleteSelectedTrip}>Apagar</DefaultButton>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}
export default TripModal
