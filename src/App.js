import './App.css';
import Items from './component/Items'
import { ItemData } from './component/ItemData';
import { useState } from 'react'

function App() {

  const [status, setStatus] = useState('')

  return (
    <div style={{background: "#E8F1F2",height: "120vh"}}>
      <div className="wrapper">
        <h1>Simple Search Filter App</h1>
        <input 
          placeholder="search item"
          type="text" 
          onChange={e => setStatus(e.target.value)} 
          className="search-box" 
          value={status}
        />
        <Items numberItems={ItemData} filterText={status} />
      </div>
    </div>
  );
}

export default App;
