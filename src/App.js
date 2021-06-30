
import React from 'react';
import styles from './styles/Global.scss';
import Routes from './pages/Routes';


function App() {
  return (
    <div className={styles.containerApp}>
      <Routes />
    </div>
  );
}

export default App;