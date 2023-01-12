import Eclipse from '../assets/Ellipse 3.svg';
import Carrito from '../assets/shopping_cart_with_cartboard_boxes_front 1.svg';
import Dollar from '../assets/dollars_front 1.svg';
import Chart from '../assets/bar_chart 1.svg';
import Box from '../assets/cartboard_boxes_with_list 1.svg';
import Resume from '../assets/resume 1.svg';
import Board from '../assets/presentation_with_statistic_front 1.svg';
import "../Styles/modulos.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function Modulos() {


    return (
        <div className="services1">
                
                 <div class='INTMOD'>
                    <h2 class='titim'>INTEGRACIÓN DE MODULOS</h2>
                 </div>
                 
                 <img src={Eclipse} alt="Naranja" className="Eclipse 3_img"/>
                 <Item1 /> 
                 <Item2 />
                 <Item3 />
                 <Item4 />
                 <Item5 />
                 <Item6 /> 

        </div>

    )
}


function Item1() {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => setIsOpen(!isOpen);


    return (          
             <motion.div transition={{ layout: { duration: 1, type: "spring" } }} 
                        layout 
                        onClick={toggleOpen} 
                        class= "Ventas">                   
                
                    
                    <motion.div layout="position" class= "Carrito">
                    <motion.img src={Carrito} alt="Naranja" className="Carrito"/>
                    <h2 class= "Vventas">VENTAS</h2>
                    <AnimatePresence>
                    {isOpen && (                        
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        exit={{opacity: 0}}
                    >
                        <p>Es un módulo ágil e intuitivo que ofrece la capacidad de facturarle a diversos clientes al mismo tiempo</p>
                        
                        
                    </motion.div>                    
                    )}
                    </AnimatePresence>                                    
                    </motion.div>
                    </motion.div>
                 
                    
    )
}

function Item2() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} 
                        layout 
                        onClick={toggleOpen} 
                        class= "Compras">                   
                
                    
                    <motion.div layout="position" class= "Dollar">
                    <motion.img src={Dollar} alt="Naranja" className="Dollar"/>
                    <h2 class= "Vcompras">COMPRAS</h2>
                    <AnimatePresence>
                    {isOpen && (                        
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        exit={{opacity: 0}}
                    >
                        <p>Es un módulo ágil e intuitivo que ofrece la capacidad de facturarle a diversos clientes al mismo tiempo</p>
                        
                        
                    </motion.div>                    
                    )}
                    </AnimatePresence>                                   
                    </motion.div>
                    </motion.div>
              
        
    )
}

function Item3() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} 
                        layout 
                        onClick={toggleOpen} 
                        class= "Cuentas">                   
                
                    
                    <motion.div layout="position" class= "Chart">
                    <motion.img src={Chart} alt="Naranja" className="Chart"/>
                    <h2 class= "Vcuentas">CUENTAS</h2>
                    <AnimatePresence>
                    {isOpen && (                        
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        exit={{opacity: 0}}
                    >
                        <p>Es un módulo ágil e intuitivo que ofrece la capacidad de facturarle a diversos clientes al mismo tiempo</p>
                        
                        
                    </motion.div>                    
                    )}
                    </AnimatePresence>                                   
                    </motion.div>
                    </motion.div>
              
        
    )
}


function Item4() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} 
                        layout 
                        onClick={toggleOpen} 
                        class= "Inventarios">                   
                
                    
                    <motion.div layout="position" class= "Box">
                    <motion.img src={Box} alt="Naranja" className="Box"/>
                    <h2 class= "Vinventarios">INVENTARIOS</h2>
                    <AnimatePresence>
                    {isOpen && (                        
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        exit={{opacity: 0}}
                    >
                        <p class= 'what'>Es un módulo ágil e intuitivo que ofrece la capacidad de facturarle a diversos clientes al mismo tiempo</p>
                        
                        
                    </motion.div>                    
                    )}
                    </AnimatePresence>                                   
                    </motion.div>
                    </motion.div>
              
        
    )
}

function Item5() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} 
                        layout 
                        onClick={toggleOpen} 
                        class= "Cajas">                   
                
                    
                    <motion.div layout="position" class= "Resume">
                    <motion.img src={Resume} alt="Naranja" className="Resume"/>
                    <h2 class= "Vresume">CAJAS</h2>
                    <AnimatePresence>
                    {isOpen && (                        
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        exit={{opacity: 0}}
                    >
                        <p>Es un módulo ágil e intuitivo que ofrece la capacidad de facturarle a diversos clientes al mismo tiempo</p>
                        
                        
                    </motion.div>                    
                    )}
                    </AnimatePresence>                                   
                    </motion.div>
                    </motion.div>
              
        
    )
}

function Item6() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} 
                        layout 
                        onClick={toggleOpen} 
                        class= "Informes">                   
                
                    
                    <motion.div layout="position" class= "Board">
                    <motion.img src={Board} alt="Naranja" className="Board"/>
                    <h2 class= "Vinformes">INFORMES</h2>
                    <AnimatePresence>
                    {isOpen && (                        
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        exit={{opacity: 0}}
                    >
                        <p>Es un módulo ágil e intuitivo que ofrece la capacidad de facturarle a diversos clientes al mismo tiempo</p>
                        
                        
                    </motion.div>                    
                    )}
                    </AnimatePresence>                                   
                    </motion.div>
                    </motion.div>
              
        
    )
}


export default Modulos;
