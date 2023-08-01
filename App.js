import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="10" hasPet = {true}/>
      <PetInfo animal="dog" age="15" hasPet = {true}/>
      <PetInfo animal="raven" age="6" hasPet = {false}/>
    </div>
  );
}

export default App;
