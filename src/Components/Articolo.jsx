import React from 'react'
import Autore from '../Components/Autore'
import Titolo from '../Components/Titolo'
import '../Styles/Articolo.css'
import autore1 from '../assets/autore1.jpg'
import Tagspan from './Tagspan'
function Articolo() {
    return (
        <>
            <div className='container-Articolo'>

                {/* <div className="tagSpan">
                </div> */}
                <div className='articolo-titolo'>
                <Tagspan tagspan='Migranti'/>
                <Titolo titolo_articolo="Rocella Jonica , la Lampedusa che l'Italia ignora"/>
                </div>
                <div className='articolo-autore'>
                <Autore name='Alessandro Puglia' data=' 04 Settembre 2024 ' foto={autore1} />

                </div>
            </div>
        </>
    )
}

export default Articolo
