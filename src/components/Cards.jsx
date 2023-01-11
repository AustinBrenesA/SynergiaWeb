import "../Styles/cards.css"
import {motion} from "framer-motion";
import images from "../assets/image";
import { useState, useRef, useEffect } from "react";

export function Cards () {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() =>{
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className="container" id="cards">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}> 
                <motion.div className="inner-carousel" drag="x" dragConstraints={{right:0, left: -width}}>
                        <motion.div className="item">
                            <img src={images[0]} alt=""/>
                            <h1>Farmacias</h1>
                        </motion.div>
                        
                        <motion.div className="item">
                            <img src={images[1]} alt=""/>
                            <h1>Ferreterias</h1>
                        </motion.div>
                        
                        <motion.div className="item">
                            <img src={images[2]} alt=""/>
                            <h1>Tiendas</h1>
                        </motion.div>
                        
                        <motion.div className="item">
                            <img src={images[3]} alt=""/>
                            <h1>Librerias</h1>
                        </motion.div>
                        
                        <motion.div className="item">
                            <img src={images[4]} alt=""/>
                            <h1>Supermercados</h1>
                        </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}