import React from 'react'
import '../Styles/TitoloArticolo.css'

function Titolo({titolo_articolo}) {
  return (
    <div className='boh'>
      <p className='Testo_articolo'>{titolo_articolo}</p>
    </div>
  )
}

export default Titolo
