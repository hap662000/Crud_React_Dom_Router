import './App.css';
import React,{useState,useEffect} from 'react';

function Item({match}) {
    useEffect(() => {
        fetchItem()
        // setItem(item)
        // console.log(match)
    },[])

    const [item,setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item.data.item)
        console.log(item.data.item)

    }
  return (
      <div>
        <h1>{item.name}</h1>
        <img src={item.images.background} alt=''/>
      </div>

  );
}
export default Item;
