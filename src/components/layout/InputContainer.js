import styles from './InputContainer.module.css'

function InputContainer() {
    return (
        <div className={styles.container}>
            <textarea name="inputText" placeholder="Digite seu texto" className={styles.text_area} ></textarea>
            <p>Apenas letras minusculas e sem acento</p>
            <div className={styles.actions}>
                <button>Criptografar</button>
                <button>Descriptografar</button>
                
                <button></button>
            </div>
        </div>
    )
}

export default InputContainer