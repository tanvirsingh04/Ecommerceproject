import './card.css';
import img1 from './cemoflagshoes.png';
import React, { useState } from 'react';
import './navbar.js';

 
function Cards(){

  const [darkMode, setDarkMode] = useState(false);
      const toggleTheme = () => {
          setDarkMode(!darkMode);
      };

  

  const [count, setCount] =useState(0);
  const plus=()=>{
    setCount(count+1);
  };

  const minus=()=>{
    setCount(count-1);
    if(count<=0){
      setCount(0);
    }
  }
  const reset = () => {
  setCount(0);
  };
  const [count1, setCount1] = React.useState(0);
  const plus1=()=>{
    setCount1(count1+1);
  };

  const minus1=()=>{
    setCount1(count1-1);
    if(count1<=0){
      setCount1(0);
    }
  }
  const reset1 = () => {
  setCount1(0);
  };
  const [count2, setCount2] = React.useState(0);
  const plus2=()=>{
    setCount2(count2+1);
  };

  const minus2=()=>{
    setCount2(count2-1);
    if(count2<=0){
      setCount2(0);
    }
  };
  const reset2 = () => {
  setCount2(0);
  };
  const [count3, setCount3] = React.useState(0);
  const plus3=()=>{
    setCount3(count3+1);
  };

  const minus3=()=>{
    setCount3(count3-1);
    if(count3<=0){
      setCount3(0);
    }
  };
  const reset3 = () => {
  setCount3(0);
  };
  const [count4, setCount4] = React.useState(0);
  const plus4=()=>{
    setCount4(count4+1);
  };

  const minus4=()=>{
    setCount4(count4-1);
    if(count4<=0){
      setCount4(0);
    }
  };
  const reset4 = () => {
  setCount4(0);
  }




    return(
      <main className={darkMode ? "app dark" : "app light"}>
        <div className="card card1">
        <img src="https://trase.in/cdn/shop/files/42139-BKWH-1.jpg?v=1749468869" className="img card1" alt="Card 1 Shoes" />
          <h2>Reebook Funky Shoes for Men</h2>
          <p>Rs-3999</p>
          <div className='btn'>
          <button className="btn-grad" id='Buynow'>Buy Now</button>
          <button className='plus' onClick={plus}>+</button>
          <input type='text' className='quantity' id='Quantity' value={count}></input>
          <button className='minus' onClick={minus}>-</button>
          <button onClick={reset}>Reset</button>
          </div>
        </div>
        <div className="card card1">
          <img src={img1} className="img card2" alt="Card 2 Shoes" />
          <h2>Reebook Loofers for Womens</h2>
          <p>Rs-2999</p>
          <div className='btn'>
          <button id="Buynow1" className="btn-grad btn2">Buy Now</button>
          <button className='plus' onClick={plus1}>+</button>
          <input type='text' className='quantity' id='Quantity1' value={count1}></input>
          <button className='minus' id='Minus1' onClick={minus1}>-</button>
          <button onClick={reset1}>Reset</button>
          </div>
        </div>
        <div className="card card1">
          <img src='https://redchief.in/cdn/shop/files/317_800x.png?v=1756061961' className="img card2" alt="Card 3 Shoes" />
          <h2>Sparks Sports Shoes for mens</h2>
          <p>Rs-4999</p>
          <div className='btn'>
          <button id="Buynow2" className="btn-grad btn3">Buy Now</button>
          <button className='plus' id='Plus2' onClick={plus2}>+</button>
          <input type='text' className='quantity' id='Quantity2' value={count2}></input>
          <button className='minus' id='Minus2' onClick={minus2}>-</button>
          <button onClick={reset2}>Reset</button>
          </div>
        </div>
        <div className="card card1">
          <img src='https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/25345394/2023/10/4/e8913b64-a87b-49e7-b685-80e9189865a51696425461509CasualShoes1.jpg' className="img card2" alt="Card 4 Shoes" />
          <h2>Jordan Air Shoes for mens (Black)</h2>
          <p>Rs-2499</p>
           <div className='btn'>
          <button id="Buynow3" className="btn-grad btn4" >Buy Now</button>
          <button className='plus' id='Plus3' onClick={plus3}>+</button>
          <input type='text' className='quantity' id='Quantity3' value={count3}></input>
          <button className='minus' id='Minus3' onClick={minus3}>-</button>
          <button onClick={reset3}>Reset</button>
           </div>
        </div>
        <div className="card card1">
          <img src='https://egoss.in/cdn/shop/files/EP-5410_BLACK.jpg?v=1753876169&width=2048'className="img card2" alt="Card 5 Shoes" />
          <h2>Bata party wear shoes for mens</h2>
          <p>Rs-1999</p>
          <div className='btn'>
          <button id="Buynow4" className="btn-grad btn5" >Buy Now</button>
          <button className='plus' onClick={plus4}>+</button>
          <input type='text' className='quantity' value={count4}></input>
          <button className='minus' onClick={minus4}>-</button>
          <button onClick={reset4}>Reset</button>
          </div>
        </div>
      </main> 
    );
    
  }
export default Cards;


 

   
  
