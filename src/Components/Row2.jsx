import React from 'react'
import '../Styles/Row2.css'
import Tagspan from './Tagspan'
import Titolo from './Titolo'
import Autore from './Autore'
import autCollasso from '../assets/autCollasso.png'
import autStartupper from '../assets/autStartupper.jpg'
import { FaArrowRight } from "react-icons/fa";
import autKiev from '../assets/autKiev.jpg'




function Row2() {
    return (
        <section className="row2">

            <div className="row2-parte1">
                <Tagspan tagspan='Allarmi' />
                <Titolo titolo_articolo="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura" />
                <Autore name='Alessandro Puglia' data=' 04 Settembre 2024 ' foto={autCollasso} />
                <button className='freccia' ><FaArrowRight /></button>

            </div>
            <div className="row2-parte2">
                <div className="row2-parte2-1">

                    <Tagspan tagspan='Esperimenti' />
                    

                    <Titolo titolo_articolo="Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni" />
                    <Autore name='Diletta Grella' data='14 Luglio 2022' foto={autStartupper} />
                    <button className='freccia' ><FaArrowRight /></button>

                </div>
                <div className="row2-parte2-2">
                    <Tagspan tagspan='Ucraina' />
                    <Titolo titolo_articolo="Nelle città italiane tutti in piazza per e con Kiev" />
                    <Autore name='Anna Spena' data=' 14 luglio 2022 ' foto={autKiev} />
                    <button className='freccia' ><FaArrowRight /></button>
                </div>

            </div>
        </section>
    )
}

export default Row2
