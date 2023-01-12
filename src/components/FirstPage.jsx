import "../Styles/firstpage.css"
import { motion } from "framer-motion";
import Background from '../assets/Background1.svg';
import Laptop from '../assets/laptop 2.svg';

export default function FirstPage () {
    return (
        <div className="firstpage">
            <h1 className="titulo">Presentamos <br></br> Synergia ERP</h1>

            <div className="parrafo">
                <p>Un sistema especial para tu
                    <br></br>
                    negocio, que te facilita
                    <br></br>
                    procesos diarios y aliviana
                    <br></br>
                    cargas de trabajo
                </p>
            </div>

            <a href="#cards">
                <motion.button className="CTA" whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }} whileTap={{ scale:0.8 }}>
                    Más
                </motion.button>
            </a>

            <div className="background">

                <motion.div>
                    <img src={Background} alt="Naranja"     className="background_img"/>
                </motion.div>

                <motion.div initial={{ x: 1 }} animate={{ x:0 }} transition= {{ type: "spring", delay:1 }}>
                    <img src={Laptop} alt="Laptop" className="laptop" />
                </motion.div>
            </div>
        </div>
    )
}