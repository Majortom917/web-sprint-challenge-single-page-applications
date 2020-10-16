import React from 'react';


export default function Form({
    values,
    update,
    submit,
    errors,
    inputChange
}){
    const onChange = (event)=>{
        const {name, value,checked, type}= event.target
            type === 'checkbox' ? update(name, checked) : update(name, value)
            type === 'checkbox' ? inputChange(name, checked) : inputChange(name, value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        submit();
    }
    }
    return(
        <form onSubmit = {onSubmit}>
            <label htmfor = 'name'>
                Name:
                <input
                    type = 'text'
                    name = 'name'
                    id = 'name'
                    placeholder = 'Enter Your Name Here'
                    value = {values.name}
                    onChange = {onChange}
                    />
            </label>

            <label htmlFor = 'size'>
                <select 
                type= 'text'
                id= 'size'
                name= 'size'
                value= {values.size}
                onChange= {onChange}
                >
                    <option value= ''>Choose Pizza Size</option>
                    <option value= 'small'>Small</option>
                    <option value= 'medium'>Medium</option>
                    <option value= 'large'>Large</option>
                </select>
            </label>

            <h3>Choose Your Toppings</h3>

            <label htmlFor= 'pepperoni'>
                Pepperoni
                <input
                    type= 'checkbox'
                    name= 'pepperoni'
                    id= 'pepperoni'
                    checked= {values.pepperoni}
                    onChange= {onChange}
                    />
            </label>
            <label htmlFor= 'bbq'>
                Bbq
                <input
                    type= 'checkbox'
                    name= 'bbq'
                    id= 'bbq'
                    checked= {values.bbq}
                    onChange= {onChange}
                    />
            </label>
            <label htmlFor= 'chicken'>
                Chicken
                <input
                    type= 'checkbox'
                    name= 'chicken'
                    id= 'chicken'
                    checked= {values.chicken}
                    onChange= {onChange}
                    />
            </label>
            <label htmlFor= 'mushroom'>
                Mushroom
                <input
                    type= 'checkbox'
                    name= 'mushroom'
                    id= 'mushroom'
                    checked= {values.mushroom}
                    onChange= {onChange}
                    />
            </label>
            <label htmlFor= 'texarea'>
                Special Instructions:
                <input
                    type= 'checkbox'
                    name= 'texarea'
                    id= 'texarea'
                    checked= {values.texarea}
                    onChange= {onChange}
                    />
            </label>
            <button>Order !</button>
            <div className= 'errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
        </form>
    )

}