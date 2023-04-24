import { useState, useRef, useEffect } from "react";

import Encryption from './utils/Encryption';

import InputContainer from './components/InputField/InputField'
import OutputContainer from './components/OutputField/OutputField'

import Header from './components/layout/Header'

function App() {
    const [outputValue, setOutputValue] = useState("");
    const [mode, setMode] = useState('encrypt');
    const [inputText, setInputText] = useState('');
    const [regexStatus, setRegexStatus] = useState(true);
    let processedText = ''
    const regex = /^[a-z]+$/;


    function regexTest(text) {
        if (text.length === 0 || regex.test(text)) {
            return true
        } else {
            return false
        }
    }

    function changeMode(newMode, textRef) {
        setMode(newMode)
        setInputText(textRef.current.value);
    }

    useEffect(() => {
        textEncryption(inputText)
    }, [mode, inputText]);

    function handleInputChange(e) {
        textEncryption(e.target.value)
    }

    function textEncryption(text) {
        
        if (!regexTest(text)) {
            setOutputValue('')
            return setRegexStatus(false)
        } else {
            setRegexStatus(true)
        }

        if (mode === 'encrypt') {
            processedText = Encryption.encrypt(text)
        } else if (mode === 'decrypt') {
            processedText = Encryption.decrypt(text)
        }
        setOutputValue(processedText)
    }


    return (
        <main>
            <Header />
            <InputContainer onInputChange={handleInputChange} changeMode={changeMode} mode={mode} textRef regexStatus={regexStatus}/>
            <OutputContainer outputValue={outputValue} regexStatus={regexStatus} />
        </main>
    );
}

export default App;
