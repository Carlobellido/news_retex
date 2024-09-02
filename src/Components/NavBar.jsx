import React from 'react'
import '../Styles/NavBar.css'
import { FiAlignJustify } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";



function NavBar() {
    return (
        <nav className='Vediamo'> 
            <section className='First'>

                <div className='Opzioni1_sinistra'>
                    <p className="contribuisci">Contribuisci</p>
                    <p className="abbonati">Abbonati</p>
                </div>
                <div className='Opzioni_destra'>
                    <span className='LoginSymbol'></span>
                    <p className='Accedi'>Accedi</p>
                </div>
                
            </section>

            <section className="Second">

                <div className="menu">
                <FiAlignJustify  style={{color:'red'}}/>
                </div>
                
                <div className="ricerca">
                <PiMagnifyingGlassBold  style={{color:'red'}}/>
                </div>

            </section>

            <section className="third">

            </section>

        </nav>
    )
}

export default NavBar
