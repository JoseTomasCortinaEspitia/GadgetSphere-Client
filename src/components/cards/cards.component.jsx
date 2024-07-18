import Card from "../card/card.component"

import styles from './cards.module.css'

const Cards = ({allGadgets}) => {
    //console.log(allGadgets)
    return (
        <div className={styles.cards}>
            {
                allGadgets.map((gadget) => (
                    <Card key={gadget.id} gadget={gadget}/>
                ))
            }           
        </div>
    )
}

export default Cards