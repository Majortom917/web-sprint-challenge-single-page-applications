import React, {useState} from "react";
import{Link, Route} from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './schema/schema'
import Home from './components/HomePage'
import Form from './components/PizzaFrom'

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

      </Route>


    </div>
   
  );
};
export default App;
