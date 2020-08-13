import React from 'react'
import { ListItem } from './ListItem'

 export const ToppingsList = ({ toppings }) => {
    return (
        <div className ="list">
            <ul>
                {toppings.map((topping, index) => (
                    <ListItem key={index} item={topping} index={index} />
                ))}
            </ul>
        </div>
        
    )
};