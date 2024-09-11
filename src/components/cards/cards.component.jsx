/* eslint-disable react/prop-types */
import Card from "../card/card.component"

import styles from './cards.module.css'

const Cards = ({allGadgets}) => {
    //console.log(allGadgets)
    return (
        <>
        {/* <!-- Header--> */}
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                  <h1 className="display-4 fw-bolder">Compra con estilo</h1>
                  <p className="lead fw-normal text-white-50 mb-0">Hacemos la vida de tu mascota más fácil y divertida</p>
              </div>
          </div>
      </header>
        {/* // <!-- Section--> */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"></div>
        <div className={styles.cards}>
            {
                allGadgets.map((gadget) => (
                    <Card key={gadget.id} gadget={gadget}/>
                ))
            }           
        </div>
        </div>
        </section>
        </>
    )
}

export default Cards