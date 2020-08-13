import React from 'react'

 export const ListItem = ({ item, index }) => {
    return (
        <li className="list-item-container">
            <div className="list-item-container">
                <div className="list-item-rank">
                    {index +1}.
                </div>
                <div className="list-item-topping">
                    Topping: {item.topping}
                </div>
                <div className="list-item-total">
                    Total Orders: {item.total}
                </div>
            </div>
            
        </li>
    )
};