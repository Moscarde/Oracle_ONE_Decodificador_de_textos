import React, { useState } from 'react';


// styles
import styles from './InputContainer.module.css'
import AttentionImg from '../../assets/img/Attention.svg'

function InputContainer({ onInputChange, changeMode, mode }) {

    
    let activeOption = 'decrypt'
    return (
        <div className={styles.container}>
            <textarea name="inputText" placeholder="Digite seu texto" className={styles.text_area} onChange={onInputChange} />
            <div className={styles.description}>
                <div
                    style={{
                        backgroundImage: `url(${AttentionImg})`
                    }}
                    className={styles.attention_icon}>
                </div>
                <p>Apenas letras minusculas e sem acento</p>
            </div>
            <div className={styles.actions}>
                <button
                    onClick={() => {changeMode('encrypt')}}
                    className={`${styles.button} ${mode === 'encrypt' ? `${styles.active}` : ''}`}>
                    Criptografar
                </button>
                <button
                    onClick={() => {changeMode('decrypt')}}
                    className={`${styles.button} ${mode === 'decrypt' ? `${styles.active}` : ''}`}>Descriptografar</button>
            </div>
        </div >
    )
}

export default InputContainer