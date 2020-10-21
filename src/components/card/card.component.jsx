import React from 'react'
import './card.styles.css'
export const Card = (props) => (

    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=s2&size=80x80`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
)