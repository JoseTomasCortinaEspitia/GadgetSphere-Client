import styles from './card.module.css'

const Card = ({gadget}) => {
    //console.log(gadget)
    return (
        <>
        <div className="card h-100">
                          {/* Product image */}
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          {/* Product details */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* Product name */}
                                  <h5 className="fw-bolder">Fancy Product</h5>
                                  {/* Product price*/}
                                  $40.00 - $80.00
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                          </div>
                      </div>

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