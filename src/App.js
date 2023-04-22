import { useState, useRef, useEffect } from "react";

import Cipher from './utils/Cipher';

import InputContainer from './components/layout/InputContainer'
import OutputContainer from './components/layout/OutputContainer'

import Header from './components/layout/Header'
import styles from './app.module.css'

function App() {
    const [inputValue, setInputValue] = useState("");
    const [mode, setMode] = useState('encrypt');
    const [inputText, setInputText] = useState('');
    let processedText = ''

    function changeMode(newMode, textRef) {
        setMode(newMode)
        setInputText(textRef.current.value);
    }

    // Executar ação após atualização do estado
    useEffect(() => {
        console.log(`mode atualizado`, mode);
        console.log(inputText);
        cipherText(inputText)
    }, [mode, inputText]);
    
    function handleInputChange(e) {
        cipherText(e.target.value)
    }
    
    
    function cipherText(text) {
        // console.log('mode atual', mode)
        // console.log('cifrando', text)
        if (mode === 'encrypt') {
            processedText = Cipher.encrypt(text)
        } else if (mode === 'decrypt') {
            processedText = Cipher.decrypt(text)
        }
        
        // console.log('setando', processedText)
        setInputValue(processedText)
    }


    return (
        <main className={styles.view}>
            <Header />
            <InputContainer onInputChange={handleInputChange} changeMode={changeMode} mode={mode} textRef/>
            <OutputContainer value={inputValue} />
        </main>
    );
}

export default App;
