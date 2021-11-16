/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Box(props) {
    return (
        <div className='s-box'>
            <div className='s-b-img'>
                <img src={props.image} alt={props.alte}/>
            </div>
            <div className='s-b-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis minima facilis aspernatur, blanditiis dolorem exercitationem officia. 
                    Ullam laborum tempora harum pariatur accusamus praesentium iusto, voluptatibus odio cum sint porro!</p>
                    <a href='#' className='cv-btn'>{props.button}</a>
            </div>
            
        </div>
    )
}

export default Box
