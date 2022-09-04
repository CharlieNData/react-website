import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
        <h1>Sample Card</h1>
        <div class="cards__container">
            <div class="cards__wrapper">
                <ul class="cards__items">
                    <CardItem 
                    src='/images/donuts.jpg'
                    text='Enjoy some donuts!'
                    label="Food"
                    path="/services"
                    />
                    <CardItem 
                    src='/images/beach.jpg'
                    text='Enjoy a trip to the beach!'
                    label="Holidays"
                    path="/services"
                    />
                </ul>
                <ul class="cards__items">
                    <CardItem 
                    src='/images/donuts.jpg'
                    text='Enjoy some donuts!'
                    label="Food"
                    path="/services"
                    />
                    <CardItem 
                    src='/images/beach.jpg'
                    text='Enjoy a trip to the beach!'
                    label="Holidays"
                    path="/services"
                    />

                    <CardItem 
                    src='/images/beach.jpg'
                    text='Enjoy a trip to the beach!'
                    label="Holidays"
                    path="/services"
                    />
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Cards