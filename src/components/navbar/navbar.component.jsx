import styles from './navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            
            <input placeholder="Busca tu Gadget...." className={styles.input} name="text" type="text" />
            <button className={styles.button}>
                <p>Buscar</p>
            </button>
      </div>
    )
}

export default Navbar