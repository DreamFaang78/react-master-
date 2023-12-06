import 'bootstrap/dist/css/bootstrap.css';
import styles from "./App.module.css"
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
function App() {

  return (
    <>
      <div className={styles.calculatoor}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  )
}

export default App
