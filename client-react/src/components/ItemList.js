import axios from "axios";
import {useState} from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  const onClick = function() {
    setError(null);
    setItems([]);
    axios.get("/api/items")
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err.response.data);
        setError(err.message);
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
      {!!error && error}
    </>
  );
};