import React from 'react';
import PokeChijo from '../../assets/pikachijo.png';
import styles from '../../styles/components/Error.module.scss';

function ErrorPage() {

    return (
        <div className={styles.errorContainer}>
            <h2>Error 404</h2>
            <h1>Pagina não encontrada</h1>
            <img src={PokeChijo} alt="" className={styles.rotativePokeChijo} />
        </div>
    )
}
export default ErrorPage;