
import React from 'react';
import styles from './styles/Global.scss';
import Routes from './pages/Routes';
import GlobalState from './global/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className={styles.containerApp}>
        <Routes />
      </div>
    </GlobalState>
  );
}

export default App;