import React, { useState, useRef } from 'react';


// styles
import styles from './InputField.module.css'
import AttentionImg from '../../assets/img/Attention.svg'

function InputContainer({ onInputChange, changeMode, mode, regexStatus }) {
    const textRef = useRef(null);
    let activeOption = 'decrypt'
    
    return (
        <div className={styles.container}>
            <textarea
                name="inputText"
                placeholder="Digite seu texto"
                className={`${styles.text_area} ${!regexStatus && `${styles.regex_false}`}`}
                onChange={onInputChange}
                ref={textRef}
            />
            <div className={styles.description}>
                <div
                    style={{
                        backgroundImage: `url(${AttentionImg})`
                    }}
                    className={styles.attention_icon}>
                </div>
                <p>Apenas letras minúsculas e sem acento</p>
            </div>
            <div className={styles.actions}>
                <button
                    onClick={() => {changeMode('encrypt', textRef)}}
                    className={`${styles.button} ${mode === 'encrypt' ? `${styles.active}` : ''}`}>
                    Criptografar
                </button>
                <button
                    onClick={() => {changeMode('decrypt', textRef)}}
                    className={`${styles.button} ${mode === 'decrypt' ? `${styles.active}` : ''}`}>
                    Descriptografar
                </button>
            </div>
        </div >
    )
}

export default InputContainer