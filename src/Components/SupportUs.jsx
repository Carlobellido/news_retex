import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../Styles/SupportUs.css'


function SupportUs() {
  return (
    <section className='Supporto'>
        <div className='fraseSupporto'>
            <h1>Il tuo supporto è fondamentale</h1>
        </div>
        <div className='Contributos'>
            <a href="#" className='anchorSup'><p>Dai il tuo contributo</p><FaArrowRight /></a>

        </div>
    </section>
  )
}

export default SupportUs
