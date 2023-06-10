
import './App.css';
import { Bottles } from './Bottles';

function App() {

  const manageClick = () => {
    console.log("we did it !!!");

  }

  return (
    <div className="App">
     <h1>a list of spices</h1>
     <div className="spice-container">
      < Bottles />
     </div>
    </div>
  );
}

export default App;
