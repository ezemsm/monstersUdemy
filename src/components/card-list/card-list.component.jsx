import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = props => (
    <div className='card-list'>
    {
        props.monsters.map(monster => (
        
        <Card key={monster.id} monster={monster}/>
        //#4
        //<h1 key={monster.id}> {monster.name}</h1>
    
        //#3
        //return(<div className='card-list'>{props.children}</div>)

    ))}
    </div>
)