import React, { useState, createContext } from 'react';

import styles from './OutputContainer.module.css'
import emptyTextImg from '../../assets/img/EmptText.svg'

function OutputContainer({ value }) {
    const [text, setText] = useState('')

    function copyToClipboard() {
        navigator.clipboard.writeText(value);
    }



    return (
        <div className={styles.container}>

            {value ?
                (
                    <div className={styles.outputActive}>
                        <p>{value}</p>
                        <button
                            onClick={() => { copyToClipboard() }}
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