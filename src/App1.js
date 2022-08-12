import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data,setData] = useState([])
  useEffect(() =>{
    fetch(url)
    .then(res => 
      res.json())
    .then(json=>{
      console.log(json,'jsonnn') 
      setData(json)
    })
    .catch(err=>{
      console.log("err",err)
    })
    },[])
    return (
  <div>
   {data.map(item => {
    return(
      <div>
      <td>{item.userId}</td>
      <td>{item.title}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
</div>
      )
    })}
  </div>
  );
}

export default App;