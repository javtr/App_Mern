import logo from './logo.svg';
import './App.css';
import './components/Saludar'
import Saludar from './components/Saludar';

function App() {
  let userInfo = {
    name: "Javier Triana",
    age: "32"
  }

  const saludarFn = name => {
   alert(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Saludar userInfo={userInfo}  saludarFn={saludarFn}  />
        
      </header>
    </div>
  );
}

export default App;
