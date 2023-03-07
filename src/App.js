import './App.css';
import MobileNumber from './components/MobileNumber';

const App = () => {
  const statTrue=true;
  const statFalse=false;
  return (
    <div className="App">
      <MobileNumber mobilePage={statTrue} namePage={statFalse}/>
    </div>
  );
}

export default App;
