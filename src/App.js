import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setpunkListData] = useState([]);

  useEffect (() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3C4a7FFe5655270F3AC7702768E4b17843d508F2&order_direction=asc')
      console.log(openseaData.data.assets);
      setpunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, []);
  return (
    <div className="app">
        <Header/>
        <Main/>
        <Punklist punkListData = {punkListData}/>
    </div>
  );
}

export default App;
