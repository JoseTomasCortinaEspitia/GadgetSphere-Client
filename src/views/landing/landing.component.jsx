import  styles  from "./landing.module.css"
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

const Landing = () => {
    return (
        <div>
            <div className={styles.contenedornav}>
                <div className={styles.logo}>
                    <img src="/logo2.png" alt="" />
                </div>
                <nav className={styles.navland}>
                    <ul>
                        <li><ScrollLink to="inicio" smooth={true} duration={500}>Inicio</ScrollLink></li>
                        <li><ScrollLink to="quienes" smooth={true} duration={500}>Quienes Somos</ScrollLink></li>
                        <li><ScrollLink to="servicios" smooth={true} duration={500}>Servicios</ScrollLink></li>
                    </ul>
                </nav>
            </div>
            <Element name="inicio">
                <div className={styles.contenedor1}>
                    <div className={styles.texto1}>
                        <h1 className={styles.titulo}>Petify</h1>
                        <p>Cuida y consiente a tu mascota con Petify ¡tu puerta a un mundo de bienestar sin límites!</p>
                        <RouterLink to="/home">
                            <button className={styles.button1}>¡Encuentra tu Accesorio Ideal!</button>
                        </RouterLink>
                    </div>
                    <div>
                        <img src="/petify-landing.png" alt="" className={styles.imagen1}/>
                    </div>
                </div>
            </Element>
            <Element name="quienes">
                <div className={styles.contenedor2}>
                    <div>
                        <img src="/petify-landing1.png" alt="" className={styles.imagen2}/>
                    </div>
                    <div className={styles.texto2}>
                        <h2>¿Quienes Somos?</h2>
                        <p>En Petify, nos dedicamos a conectar a los amantes de las mascotas con los mejores accesorios y productos. Nuestra misión es proporcionar un espacio donde cada dueño pueda encontrar lo que necesita para cuidar y consentir a sus compañeros peludos, creando vínculos más fuertes y duraderos con ellos.</p>
                        <RouterLink to="/home">
                            <button className={styles.button1}>¡Accesorio a Casa!</button>
                        </RouterLink>
                    </div>
                </div>
            </Element>
            <Element name="servicios">
                <div className={styles.contenedor3}>
                    <div>
                        <h1>Servicios</h1>
                    </div>
                    <div className={styles.imgcontenedor}>
                        <div className={styles.servicio}>
                            <h2>Descubre Nuevas Tendencias</h2>
                            <img src="/petify-servicio1.png" alt="" className={styles.imagen3}/>
                            <p>Explora una variedad única y emocionante de accesorios para tu mascota. ¡Encuentra los productos más innovadores para consentir a tu compañero peludo!</p>
                        </div>
                        <div className={styles.servicio}> 
                            <h2>Cuida y Protege a Tu Mascota</h2>
                            <img src="/petify-servicio2.png" alt="" className={styles.imagen3}/>
                            <p>Elige entre una selección de productos pensados para el bienestar y seguridad de tu mascota. ¡Proporciona lo mejor para que siempre esté feliz y saludable!</p>
                        </div>
                        <div className={styles.servicio}>
                            <h2>Atención Personalizada</h2>
                            <img src="/petify-servicio3.png" alt="" className={styles.imagen3}/>
                            <p>Encuentra el accesorio ideal para tu mascota. Nuestros expertos te guiarán para que elijas los productos que mejor se adapten a sus necesidades y preferencias.</p>
                        </div>
                        
                    </div>
                    <div>
                    <RouterLink to="/home">
                        <button className={styles.button1}>¡Hazlo Tuyo Ahora!</button>
                    </RouterLink>
                    </div>
                </div>
            </Element>
        </div>

    )
}

export default Landing