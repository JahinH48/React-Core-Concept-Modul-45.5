import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <LoadUser></LoadUser>

      <Mycomponent brand="apple" price="5000"></Mycomponent>
      <Mycomponent brand="Microsoft" price="10000"></Mycomponent>
      <Mycomponent brand="google" price="0"></Mycomponent>
      <Mycomponent brand="sumsung" price="30000 "></Mycomponent>
    </div>
  );
}

function LoadUser() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    , [])
  return (
    <div>
      <h1>Users Load : {users.length} </h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div >
  )
}

function Mycomponent(props) {
  const [point, setPoint] = useState([]);

  const myStyle = {
    backgroundColor: 'lightblue',
    border: '5px solid blue'
  }
  const Jisan = () => {
    console.log('click')
  }
  return (
    <div style={myStyle}>
      <h1>Yo mama! My own compo compo component!! </h1>
      <h4>Brand  = {props.brand}</h4>
      <h3>Price = {props.price} i have point = { }</h3>
      <button onClick={Jisan}>Add Point</button>
    </div>
  )
}


function User(user) {
  return (
    <div>
      <h2>Name : {user.name}</h2>
      <p>Call : {user.phone}</p>
    </div>
  )
}

export default App;
