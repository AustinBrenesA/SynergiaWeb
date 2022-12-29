import "../Styles/cards.css"
import Herramientas from '../assets/Herramientas.svg';
import Tienda from "../assets/Tienda.svg"
import Jeringa from '../assets/Jeringa.svg'

export function Cards () {
    return (
        <div class="container">

            <input type="radio" name="slider" class="d-none" id="s1" checked/>
            <input type="radio" name="slider" class="d-none" id="s2"/>
            <input type="radio" name="slider" class="d-none" id="s3"/>
            <input type="radio" name="slider" class="d-none" id="s4"/>
            <input type="radio" name="slider" class="d-none" id="s5"/>

        <div class="cards">
            <label for="s1" id="slide1">
                <div class="card">
                    <img src={Herramientas} alt="Herramientas" className="image"/>
                    <h1 class="name">Ferreterias</h1>
                </div>
            </label>

            <label for="s2" id="slide2">
                <div class="card">
                    <img src={Jeringa} alt="Jeringa" className="image"/>
                    <h1 class="name">Farmacias</h1>
                </div>
            </label>

            <label for="s3" id="slide3">
                <div class="card">
                    <img src={Tienda} alt="" className="image"/>
                    <h1 class="name">aja</h1>
                </div>
            </label>

            <label for="s4" id="slide4">
                <div class="card">
                    <img src={Tienda} alt="" className="image"/>
                    <h1 class="name">aja</h1>
                </div>
            </label>

            <label for="s5" id="slide5">
                <div class="card">
                    <img src={Tienda} alt="" className="image"/>
                    <h1 class="name">Tiendas</h1>
                </div>
            </label>
        </div>

        </div>
    )
}