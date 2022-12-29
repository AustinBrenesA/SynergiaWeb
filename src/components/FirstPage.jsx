import "../Styles/firstpage.css"
import Background from '../assets/Background1.svg';
import Laptop from '../assets/laptop 1.svg';

function FirstPage () {
    return (
        <div className="firstpage">
            <h1 className="titulo">Presentamos <br></br> Biznet ERP</h1>
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
            <div className="background">
                <img src={Background} alt="Naranja" className="background_img"/>
                <img src={Laptop} alt="Laptop" 
                className="laptop"/>
            </div>
        </div>
    )
}

export default FirstPage;