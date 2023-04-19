
import Header from './components/layout/Header'
import InputContainer from './components/layout/InputContainer'
import OutputContainer from './components/layout/OutputContainer'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.view}>
      <Header />
      <InputContainer />
      <OutputContainer />
    </div>
  );
}

export default App;
