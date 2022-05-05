import { useEffect, useState } from "react";

const CustomItem = ()=> {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(`https://cryptic-falls-85122.herokuapp.com/inventory`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return [items, setItems];
}

export default CustomItem;