import React from 'react'
import '../Styles/NavBar.css'
import { FiAlignJustify } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useState } from 'react';




function NavBar() {


     // Stato per tracciare quale opzione è selezionata
     const [selectedOption, setSelectedOption] = useState('');

     // Funzione per gestire il click su un'opzione
     const handleOptionClick = (option) => {
         setSelectedOption(option);
     };

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
                    <FiAlignJustify style={{ color: 'red' }} />
                </div>

                <div className="ricerca">
                    <PiMagnifyingGlassBold style={{ color: 'red' }} />
                </div>

            </section>

            <section className="third">
                <div className="content">
                <ul className='opzioniContent'>
                <li
                            className={selectedOption === 'Tutti i temi' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Tutti i temi')}
                        >
                            Tutti i temi
                        </li>
                        <li
                            className={selectedOption === 'Ambiente' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Ambiente')}
                        >
                            Ambiente
                        </li>
                        <li
                            className={selectedOption === 'Economia' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Economia')}
                        >
                            Economia
                        </li>
                        <li
                            className={selectedOption === 'Mondo' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Mondo')}
                        >
                            Mondo
                        </li>
                        <li
                            className={selectedOption === 'Non Profit' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Non Profit')}
                        >
                            Non Profit
                        </li>
                        <li
                            className={selectedOption === 'Politica' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Politica')}
                        >
                            Politica
                        </li>
                        <li
                            className={selectedOption === 'Società' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Società')}
                        >
                            Società
                        </li>
                        <li
                            className={selectedOption === 'Welfare' ? 'selected' : ''}
                            onClick={() => handleOptionClick('Welfare')}
                        >
                            Welfare
                        </li>
                </ul>
                </div>

                <div className="toggle">
                    <p>Aa</p>
                    <a className='togglePhoto'><HiOutlinePhotograph/></a>
                </div>
            </section>

        </nav>
    )
}

export default NavBar
