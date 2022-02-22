import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [punkListData, setpunkListData] = useState([]);

  useEffect (() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3C4a7FFe5655270F3AC7702768E4b17843d508F2&order_direction=asc')
      console.log(openseaData.data.assets);
    }
    return getMyNfts()
  }, []);
  return (
    <div className="app">
        <Header/>
        <CollectionCard 
           id = {0} 
           name = {'Bandana Punk'} 
           traits = {[{'value' : 7}]}
           image = "https://i.ytimg.com/vi/4RTte4RA1Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOdlLEgQtra4DmRSoMZCCCN8mKmw"
           />
    </div>
  );
}

export default App;
