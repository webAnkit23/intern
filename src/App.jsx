import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Search from './Components/Search';
import Display from './Components/Display';


function App() {
  const [data,setData] = useState();
  const [filterData ,setfilterData] = useState([]);
useEffect(() =>{
   async function getData(){
    try{
    const res = await axios.get('https://api.punkapi.com/v2/beers');
        setData(res.data);
        console.log(data);
        setfilterData(res.data);
    }
    catch(err){
        alert(err.messege)
    }
    }
    getData();
},[])
const handleFilterData =(query) =>{
  if(query===''){
    setfilterData(data);
    return;
  }
 setfilterData(data.filter((beer) => beer.name.toLowerCase().includes(query.toLowerCase()))); 
}
  return (
    
    <>
      <Search handleFilterData={handleFilterData}/>
      <Display data={filterData}/>
   </>
    
  )
}

export default App
