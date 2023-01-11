import '../Styles/secondpage.css';
import handshake from '../assets/Handshake.svg';
import background2 from '../assets/Background2.svg';

export function SecondPage () {

    return (
        <div className="secondpage">

            <h1 className='titulo2'>Quienes somos?</h1>

            <div className="parrafoSecond">
                

                <p className='parrafo2'>
                    Somos una empresa comprometida en diseñar el crecimiento de su empresa, buscamos ser un aliado de confianza para brindar soluciones a la medida con un valor tecnológico agregado
                </p>

                

                <div className="background2">

                    <img src={background2} alt="" className='backgroundimg2'/>
                    <img src={handshake} alt="" className='handshake'/>

                </div>
            </div>
        </div>
    )
}