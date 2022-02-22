import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
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
