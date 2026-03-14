import './card.css';
import img1 from './cemoflagshoes.png';
import img2 from './shoesreebok.png';
 function buynaow(){

    document.getElementById("btn1").style.visibility="hidden";
  }
function Cards(){
    return(
      <div className="cards">
        <div className="card card1">
        <img src="https://trase.in/cdn/shop/files/42139-BKWH-1.jpg?v=1749468869" className="img card1" alt="Card 1 Image" />
          <h2>Reebook Funky Shoes for Men</h2>
          <p>Rs-3999</p>
          <div className='btn'>
          <button className="btn-grad" id='Buynow'>Buy Now</button>
          <button className='plus' id='Plus'>+</button>
          <input type='text' className='quantity' id='Quantity'></input>
          <button className='minus' id='Minus'>-</button>
          </div>
        </div>
        <div className="card card1">
          <img src={img1} className="img card2" alt="Card 2 Image" />
          <h2>Reebook Loofers for Womens</h2>
          <p>Rs-2999</p>
          <div className='btn'>
          <button id="Buynow1" className="btn-grad btn2">Buy Now</button>
          <button className='plus' id='Plus1'>+</button>
          <input type='text' className='quantity' id='Quantity1'></input>
          <button className='minus' id='Minus1'>-</button>
          </div>
        </div>
        <div className="card card1">
          <img src='https://redchief.in/cdn/shop/files/317_800x.png?v=1756061961' className="img card2" alt="Card 2 Image" />
          <h2>Sparks Sports Shoes for mens</h2>
          <p>Rs-4999</p>
          <div className='btn'>
          <button id="Buynow2" className="btn-grad btn3">Buy Now</button>
          <button className='plus' id='Plus2'>+</button>
          <input type='text' className='quantity' id='Quantity2'></input>
          <button className='minus' id='Minus2'>-</button>
          </div>
        </div>
        <div className="card card1">
          <img src='https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/25345394/2023/10/4/e8913b64-a87b-49e7-b685-80e9189865a51696425461509CasualShoes1.jpg' className="img card2" alt="Card 2 Image" />
          <h2>Jordan Air Shoes for mens (Black)</h2>
          <p>Rs-2499</p>
           <div className='btn'>
          <button id="Buynow3" className="btn-grad btn4" >Buy Now</button>
          <button className='plus' id='Plus3'>+</button>
          <input type='text' className='quantity' id='Quantity3'></input>
          <button className='minus' id='Minus3'>-</button>
           </div>
        </div>
        <div className="card card1">
          <img src='https://www.ehomestore.in/cdn/shop/products/5102574763.jpg?v=1707655459'className="img card2" alt="Card 2 Image" />
          <h2>Bata party wear shoes for mens</h2>
          <p>Rs-1999</p>
          <div className='btn'>
          <button id="Buynow4" className="btn-grad btn5" >Buy Now</button>
          <button className='plus' id='Plus4'>+</button>
          <input type='text' className='quantity' id='Quantity4'></input>
          <button className='minus' id='Minus4'>-</button>
          </div>
        </div>
      </div> 
    );
    
  }
export default Cards;


 

   
  
