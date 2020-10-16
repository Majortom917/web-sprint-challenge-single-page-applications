import React, {useState} from "react";
import{Link, Route} from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './schema/schema'
import Home from './components/HomePage'
import Form from './components/PizzaForm'
import PizzaArchetype from './components/PizzaArchetype'

const formInitialValue = {
  name: '',
  size: '',
  pepperoni: false,
  bbq: false,
  mushroom: false,
  chicken: false,
  textarea: '',

}


const initialFromErrors ={
  name: '',
  size: '',
}
const pizzaInitialValue =[]



const App = () => {
  const [formValue, setFormValue] = useState(formInitialValue)
  const [pizza, setPizza] = useState(pizzaInitialValue)
  const [formErrors, setFormErrors] = useState(initialFromErrors)

  const pizzaOnChange = (name, value)=>{
    setFormValue({...formValue, [name]: value})
  }

  const pizzaSubmit = ()=>{
    setPizza([...pizza, formValue])
    setFormValue(formInitialValue)
  }

  const inputChange = (name, value)=>{
    yup
      .reach(formSchema, name)
      .validate(value)

      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

      setFormValue({
        ...formValue,
        [name]: value,
      });
    };
  

  return (

    <div className = 'niceDiv'>
      <Link to ='/'>Home</Link>
      <Route exact path = '/'>
        <Home/>

        <Link to ='/pizza'>
          <button>Create Pizza!</button>
        </Link>
      </Route>

      <Route path = '/pizza'>
        <Form
         values={formValue}
         update={pizzaOnChange}
         submit={pizzaSubmit}
         errors={formErrors}
         inputChange={inputChange}
       />
       {pizza.map((order) => (
          <PizzaArchetype confirmedOrders={order} key={order.name} />
        ))}



      </Route>


    </div>
   
  );
};
export default App;
