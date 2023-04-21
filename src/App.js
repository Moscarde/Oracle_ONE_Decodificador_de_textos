import { useState } from "react";

import Cryptography from './utils/Cryptography';

import InputContainer from './components/layout/InputContainer'
import OutputContainer from './components/layout/OutputContainer'

import Header from './components/layout/Header'
import styles from './app.module.css'

function App() {
    const [inputValue, setInputValue] = useState("");
    const [mode, setMode] = useState('encrypt');

    function changeMode(mode) {
        setMode(mode)
    }
    
    function handleInputChange(e) {
        let processedText = ''
        if (mode === 'encrypt') {
            processedText = Cryptography.encrypt(e.target.value)
        } else if (mode === 'decrypt') {
            processedText = Cryptography.decrypt(e.target.value)
        }
        
        setInputValue(processedText)
    }


    return (
        <main className={styles.view}>
            <Header />
            <InputContainer onInputChange={handleInputChange} changeMode={changeMode} mode={mode} />
            <OutputContainer value={inputValue} />
        </main>
    );
}

export default App;
