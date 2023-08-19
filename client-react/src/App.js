import 'App.css';
import ItemList from 'components/ItemList';
import Status from 'components/Status';

export default function App() {

  return (
    <div className="App">
      <h1>React Express Demo</h1>
      <Status />
      <ItemList />
    </div>
  );
}