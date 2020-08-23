import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const employList =['shuvo','hridoy','piku','mintu','santo','swkin']
  const products =[
    {name: 'iPhone 7Pro',price:'$350.22',madeBy: 'China'},
    {name: 'iPhone 8Pro',price:'$370.22',madeBy:'USA'},
    {name: 'iPhone 9Pro',price:'$390.22',madeBy: 'Uk'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            employList.map(employ => <li>{employ}</li>)
          }
        </ul>
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>

        <Person name={employList[1]} profession="student"></Person>
        <Person name="Rakib" profession="Mercent"></Person>
      </header>
    </div>
  );
}
function Products(props){
  const productStyle={
    borderRadius: '5px',
    backgroundColor: "grey",
    marginTop: '5px',
    width: '250px',
    height: '300px'
  }
  const {name,price,madeBy} = props.product;
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h5>Price:{price}</h5>
      <p> MadeBy: {madeBy}</p> <button>Buy Now</button>
    </div>
  )
}
function Person (props){
  
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

export default App;
