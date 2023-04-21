import styles from './OutputContainer.module.css'

import emptyTextImg from '../../assets/img/EmptText.svg'

function OutputContainer() {
    return (
        <div className={styles.container}>

            <div
                style={{
                    backgroundImage: `url(${emptyTextImg})`
                }}
                className={styles.empty_text_img}>
                
            </div>
            <h2>Nenhuma mensagem encontrada</h2>
            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
    )
}

export default OutputContainer