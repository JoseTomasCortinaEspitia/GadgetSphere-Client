//Importo las librerias o dependencias
import { useState, useEffect } from 'react'; // este hook useEffect me ayuda a controlar el ciclo de vida de mi componente
import { useDispatch, useSelector } from 'react-redux';

//Importa las actions
import { getGadgets } from '../../redux/actions'

//Importamos los Componentes
import Cards from "../../components/cards/cards.component"
import Navbar from "../../components/navbar/navbar.component"

const Home = () => {

    const dispatch = useDispatch();
    const allGadgets = useSelector((state) => state.allGadgets);

    useEffect(() => {
        dispatch(getGadgets())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Cards allGadgets={allGadgets}/>
        </div>
    )
}

export default Home