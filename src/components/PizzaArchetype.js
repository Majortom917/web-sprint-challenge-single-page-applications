import React from 'react'

export default function PizzaArchetype(props){
    const {
        name,
        size,
        pepperoni,
        bbq,
        chicken,
        mushroom,
        textarea,
    } = props.confirmedOrders;

    return(
        <div>
            <h1>Name: {name}</h1>
            <div>Size: {size}</div>
            <h2>Toppings:</h2>
                <ul>
                    <li>Pepperoni: {pepperoni ? 'yes' : 'no'}</li>
                    <li>bbq: {bbq ? 'yes' : 'no'}</li>
                    <li>chicken: {chicken ? 'yes' : 'no'}</li>
                    <li>mushroom: {mushroom ? 'yes' : 'no'}</li>
                </ul>
            <div>
                Special Instructions:
                {textarea === '' ? 'no special instructions' : textarea}
            </div>
        </div>

    )



}