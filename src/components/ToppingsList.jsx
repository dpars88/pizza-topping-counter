import React from 'react'
import { ListItem } from './ListItem'

 export const ToppingsList = ({ toppings, loading }) => {
    return loading ? (
        <div>
            Loading...
        </div>
    ) : (
        <div className ="list">
            <ul>
                {toppings.map((topping, index) => (
                    <ListItem key={index} item={topping} index={index} />
                ))}
            </ul>
        </div>
        
    )
};