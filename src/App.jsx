import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header'
import { ToppingsList } from './components/ToppingsList'
import axios from 'axios'

function App() {
  const [toppings, setToppings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchToppingCombos = async () => {
      const result = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://www.olo.com/pizzas.json'
        )
      const items = result.data;
      const toppingsObj = {};
      // Add up topping combos and set key/values on newly created object
      items.map(item => {
        let current = item.toppings;
          if (!toppingsObj[current]) {
            toppingsObj[current] = 1;
          } else {
            toppingsObj[current] ++;
          }
        return toppingsObj;
      });
      const toppingComboArray = Object.entries(toppingsObj);
      // Sort most popular topping combos, then slice off top 20 combos
      let sorted = toppingComboArray.sort((a, b) => b[1] - a[1]);
      sorted = sorted.slice(0, 20)
      // Put data back into Array of objects
      const final = [];
      sorted.map((item) => {
        let obj = {};
        obj['topping'] = item[0];
        obj['total'] = item[1];
        final.push(obj);
        return final;
      });
      setToppings(final);
      setLoading(false);
    };

    fetchToppingCombos()
    
  });

  return (
    <div className="App">
        <Header />
        <div className="toppings-list">
          <ToppingsList toppings={toppings} loading={loading}/>
        </div>
    </div>
  )
};

export default App;
