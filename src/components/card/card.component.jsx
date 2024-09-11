/* eslint-disable react/prop-types */
import styles from './card.module.css'

const Card = ({gadget}) => {
    //console.log(gadget)
    return (
        <>              
                  

        <div className={styles.card} >
            <div className={styles.card__content}>
                <p>{gadget.name}</p>
                <p>Precio: {gadget.price}</p>
                <img className={styles.imgcard} src={gadget.image} alt="" />
                <p>Cantidad: {gadget.stock}</p>
            </div>
        </div> 
        </>
    )
}

export default Card