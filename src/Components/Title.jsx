import React from 'react'
import '../Styles/Title.css'

function Title() {




    return (
        <section className='titleTags'>
            <div className="title">
                <h1>Tutti i temi</h1>

            </div>
            <div className="tags">
                <ul className='tagslist'>
                    <li className='liVerde'>Ambiente</li>
                    <li >Economia</li>
                    <li className='lirosso'>Mondo</li>
                    <li>Non Profit</li>
                    <li className='liGiallo'>Politica</li>
                    <li>Società</li>
                    <li>Welfare</li>
                </ul>
            </div>

        </section>
    )
}

export default Title
