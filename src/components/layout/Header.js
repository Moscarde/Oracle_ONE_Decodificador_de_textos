import Logo from '../../assets/img/Logo.svg'

import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1><img src={Logo} alt="Decodificador de Textos" /></h1>
        </header>
    )
}

export default Header