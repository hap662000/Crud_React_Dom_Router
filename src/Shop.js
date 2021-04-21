import './App.css';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'

function Shop() {
    useEffect(() => {
        fetchItems();
    },[])

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
        );

        const items = await data.json();
        // console.log(items.data);
        setItems(items.data);
    }
  return (
    // <h1>Shop Page</h1>
    <div>
        {items.map(item => (
                <h1 key={item.itemId}>
                   <Link to ={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
        ))}
    </div>

  );
}
export default Shop;
