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
        
                      <div className="card h-100">
                          {/* <!-- Sale badge--> */}
                          <div className="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{gadget.name}</h5>
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
                                  ${gadget.price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
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