/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import featureimage from '../images/Frame 19.png'

function Features() {
    return (
        <div id='features'>
            <div className='features-model'>
                <img src={featureimage} alt='feature-image'/>
            </div>
            <div className='features-text'>
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ab, eos aliquam reiciendis magnam est maiores dignissimos 
                    consequatur vero veniam voluptas, 
                    natus sequi quaerat praesentium ratione fuga enim, repellendus minus beatae.</p>
                    <button>View More Features</button>
                    {/* <button
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://google.com';
                    }}
                    > Click here</button> */}
            </div>
        </div>
    )
}

export default Features
