import React from 'react'
import '../Styles/NavBar.css'
import { FiAlignJustify } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useState } from 'react';
import '../Styles/modalHidden.css'
import { IoCloseOutline } from "react-icons/io5";





function NavBar() {

    // Stato per la visibilità del menu
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Funzione per mostrare il menu
    const showMenu = () => {
        setIsMenuVisible(true);
    };


    // Funzione per nascondere il menu
    const hideMenu = () => {
        setIsMenuVisible(false);
    };


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
                    <div className='media-contribuisci'>
                        <p className="contribuisci">Contribuisci</p>
                    </div>
                    <div className='media-abbonati'>
                        <p className="abbonati">Abbonati</p>
                    </div>
                </div>
                <div className='Opzioni_destra'>
                    <span className='LoginSymbol'></span>
                    <p className='Accedi'>Accedi</p>
                </div>

            </section>

            <section className="Second">

                <div className="menu">
                    <a href="#" onClick={showMenu} >
                        <FiAlignJustify style={{ color: 'red' }} className='menu-hamb' />
                    </a>
                </div>

                {isMenuVisible && (<div class='modal-menu-hidden'>
                    <a href="#" onClick={hideMenu}>
                        <IoCloseOutline
                            style={{ color: 'red' }} id='close' />
                    </a>
                    <div class="menu1">

                        <div class='menu1-1'>
                            <h2>Articoli</h2>
                            <p>Trend, dati e novità del Terzo Settore.</p></div>
                        <div class='menu1-2'>
                            <h2>Storie</h2>

                            <p>Letture ed approfondimenti dei fenomeni complessi.</p>
                        </div>
                        <div class='menu1-3'>
                            <h2>Interviste</h2>
                            <p>Racconti reali di persone ed organizzazioni.</p></div>

                    </div>
                    <div class="menu2">
                        <div class='menu2-1'>
                            <h2>Opinioni</h2>

                            <p>Riflessioni e confronti dei nostri opinionisti.</p></div>
                        <div class='menu2-2'>
                            <h2>Podcast</h2>

                            <p>Un luogo per dare voce ai protagonisti della sostenibilità.</p></div>
                        <div class='menu2-3'>
                            <h2>Bookazine</h2>

                            <p>Una rivista da leggere e un libro da conservare.</p></div>

                    </div>

                    <div class="menu3">
                        <div class='menu3-1'>

                            <div class='menu3-1-1'>
                                <p>Chi siamo</p>
                            </div>


                            <div class='menu3-1-2'>
                                <p>Comitato editoriale</p>
                            </div>

                        </div>
                        <div class='menu3-2'>
                            <div class='menu3-2-1'>
                                <p>Servizi</p>
                            </div>


                            <div class='menu3-2-2'>
                                <p>Agenda / Eventi</p>
                            </div>

                        </div>
                        <div class='menu3-3'>

                            <div class='menu3-3-1'>
                                <p>Mappa dell’attivismo</p>
                            </div>


                            <div class='menu3-3-2'>
                                <p>Inchieste crowdfunding</p>
                            </div>
                        </div>
                    </div>

                    <div className="overlay" onClick={hideMenu}></div>


                </div>
                )}


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
                    <a href='#' className='togglePhoto'><HiOutlinePhotograph /></a>
                </div>
            </section>

        </nav>
    )
}

export default NavBar
