import { useState, useRef, useEffect } from "react";

import Encryption from './utils/Encryption';

import InputContainer from './components/InputField/InputField'
import OutputContainer from './components/OutputField/OutputField'

import Header from './components/layout/Header'

function App() {
    const [outputValue, setOutputValue] = useState("");
    const [mode, setMode] = useState('encrypt');
    const [inputText, setInputText] = useState('');
    let processedText = ''


    function changeMode(newMode, textRef) {
        setMode(newMode)
        setInputText(textRef.current.value);
    }

    // Executar ação após atualização do estado
    useEffect(() => {
        textEncryption(inputText)
    }, [mode, inputText]);

    function handleInputChange(e) {
        textEncryption(e.target.value)
    }


    function textEncryption(text) {
        if (mode === 'encrypt') {
            processedText = Encryption.encrypt(text)
        } else if (mode === 'decrypt') {
            processedText = Encryption.decrypt(text)
        }
        setOutputValue(processedText)
        console.log(processedText)
    }


    return (
        <main>
            <Header />
            <InputContainer onInputChange={handleInputChange} changeMode={changeMode} mode={mode} textRef />
            <OutputContainer outputValue={outputValue} />
        </main>
    );
}

export default App;
