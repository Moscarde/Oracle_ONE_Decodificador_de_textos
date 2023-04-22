import React, { useState, createContext } from 'react';

import styles from './OutputField.module.css'
import emptyTextImg from '../../assets/img/EmptText.svg'

function OutputContainer({ outputValue }) {
    const [text, setText] = useState('')

    function copyToClipboard(e) {
        // Copy output texto to clipboard
        navigator.clipboard.writeText(outputValue);

        // Change button value to confirm copy
        e.target.innerHTML = 'Texto copiado!'
        setTimeout(() => {
            e.target.innerHTML = 'Copiar'
        }, 2000)
    }



    return (
        <div className={styles.container}>

            {outputValue ?
                (
                    <div className={styles.outputActive}>
                        <p>{outputValue}</p>
                        <button
                            onClick={copyToClipboard}
                        >
                            Copiar
                        </button>
                    </div>
                ) : (
                    <>
                        <div
                            style={{
                                backgroundImage: `url(${emptyTextImg})`
                            }}
                            className={styles.empty_text_img}>

                        </div>
                        <h2>Nenhuma mensagem encontrada</h2>
                        <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
                    </>
                )
            }
        </div>
    )
}

export default OutputContainer