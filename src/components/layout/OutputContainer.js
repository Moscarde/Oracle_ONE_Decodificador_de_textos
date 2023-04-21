import React, { useState, createContext } from 'react';

import styles from './OutputContainer.module.css'
import emptyTextImg from '../../assets/img/EmptText.svg'

function OutputContainer({ value }) {
    const [text, setText] = useState('')
    return (
        <div className={styles.container}>

            {value ?
                (
                    <p>{value}</p>

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