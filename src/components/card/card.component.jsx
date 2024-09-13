/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from './card.module.css'

const Card = ({gadget}) => {

    // const [isFav, setIsFav] = useState(false);

    // const handleFavorite = () => {
    //     if(isFav){
    //         setIsFav(false);
    //     }else{
    //         setIsFav(true);
    //     }
    // }

    //console.log(gadget)
    return (
        <>              
            <div className={styles.card}>
            <Link to={`/home/${gadget.id}`}>
                <div className={styles.card__content}>
                        {/* <!-- Sale badge--> */}
                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                        <div className={styles.cardHeader}>
                        <div className={styles.cardHeaderwrapper}>
                            {/* {isFav ? (
                                    <button onClick={handleFavorite}>❤️</button>
                                    ) : (
                                        <button onClick={handleFavorite}>🤍</button>
                                        )
                            } */}
                            {/* <button onClick={()=>props.onClose(props.id)}>X</button> */}
                        </div>
                                {/* <!-- Product image--> */}
                                <img className={styles.imgcard} src={gadget.image} alt="..." />
                                {/* <!-- Product details--> */}
                        </div>
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <p>{gadget.name}</p>
                                {/* <!-- Product reviews--> */}
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                <span className="text-muted text-decoration-line-through">$20.00</span>
                                ${gadget.price}COP
                            </div>
                        
            <button className="text-center">
                Agregar al carrito
            </button>              
                </div>
            </Link>
            </div>

        {/* <div className={styles.card} >
            <div className={styles.card__content}>
                <p>{gadget.name}</p>
                <p>Precio: {gadget.price}</p>
                <img className={styles.imgcard} src={gadget.image} alt="" />
                <p>Cantidad: {gadget.stock}</p>
            </div>
        </div>  */}
        </>
    )
}

export default Card