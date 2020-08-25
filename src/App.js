import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRoles } from '@testing-library/react';

function App() {
  const employList =['shuvo','hridoy','piku','mintu','santo','swkin','gopal']

  const persons =[
    {name:'Shuvo',profession:"Student",location:'Chittagong'},
    {name:'Sakib',profession:'JobHolder',location: 'Dhaka'}
  ]
  // const friendList =[
  //   {name:'Subrate',dept:'CSE',batch:'12-13'},
  //   {name:'Borhan',dept:'CSE',batch:'13-14'},
  //   {name:'Meskat',dept:'CSE',batch:'12-13'}
  // ]
  const products =[
    {name: 'iPhone 7Pro',price:'$350.22',madeBy: 'China'},
    {name: 'iPhone 8Pro',price:'$370.22',madeBy:'USA'},
    {name: 'iPhone 9Pro',price:'$390.22',madeBy: 'Uk'}
  ]
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <Person person={persons[0]}></Person>
        <Person person={persons[1]}></Person> */}
        <Counter></Counter>
        <Users></Users>
        <Posts></Posts>
        <ul>
          {
            employList.map(employ => <li>{employ}</li>)
          }
          {
            products.map(prod => <Products product={prod}></Products>)
          }
          {
            persons.map(person => <Person person={person}></Person>)
          }
        </ul>
        

        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
         <Products product={products[2]}></Products> */}
        
      </header>
    </div>
  );
}
function Posts(){
  const [posts,setPosts] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1>User Posts: {posts.length}</h1>
      
      <ul>
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>

  )
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Users:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
   
  )
}
function Counter(){
  const [count,setCount] = useState(15);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount (count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Person (props){
  const personStyle={
    backgroundColor: 'grey',
    borderRadius: '10px',
    width: '350px',
    height: '300px',
    margin: "10px"

  }
  const {name,location} = props.person;
  return (
    <div style={personStyle}>
      <h1>Name: {name}</h1>
      <p>Location:{location}</p>
    </div>
  )
}
function Products(props){
  const productStyle={
    borderRadius: '5px',
    backgroundColor: "grey",
    margin: '10px',
    width: '250px',
    height: '300px'
  }
  const {name,price,madeBy} = props.product;
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h5>Price:{price}</h5>
      <p> MadeBy: {madeBy}</p>
     <button>Buy Now</button>
    </div>
  )
}


export default App;
