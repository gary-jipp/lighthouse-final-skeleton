import {useState} from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  const list = items.map(item => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <button>Show</button>
      <ul>{list}</ul>
    </>
  );
};