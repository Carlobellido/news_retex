import React from 'react'
import '../Styles/Autore.css'
function Autore({name , data , foto}) {

    return (
    <article className='autore-card'>
        <header className='autore-card-header'>
            <img className='autore-card-avatar' src={foto} alt="avatar" />
            <div className='autore-card-info'>
                <strong>Di {name}</strong>
                <span className='autore-card-infoData'>{data}</span>
            </div>
        </header>
    </article>
  )
}

//    <Autore name="Carlo Bellido" data="04 settembre 2024" foto='midudev' />


export default Autore
