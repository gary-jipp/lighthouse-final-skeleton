import axios from "axios";
import {useState} from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  const onClick = function() {
    axios.get("/api/items")
      .then(res => {
        setItems(res.data);
      });
  };

  const list = items.map(item => <li key={item.id}>{item.name}</li>);

  return (
    <>
      {!items.length &&
        <button onClick={onClick}>Fetch</button>
      }
      {!!items.length &&
        <button onClick={() => setItems([])}>Clear</button>
      }
      <ul>{list}</ul>
    </>
  );
};