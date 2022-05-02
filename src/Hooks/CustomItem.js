import { useEffect, useState } from "react";

const CustomItem = ()=> {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(`http://127.0.0.1:5000/inventory`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return [items, setItems];
}

export default CustomItem;