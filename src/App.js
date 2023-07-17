import logo from './logo.svg';
import './App.css';
import withColorChange from './withColorChange';
import HelloWorld from './HelloWorld';
import withBorder from './withBorder';
import HelloBorder from './HellowBorder';

function App() {
  const HelloWorldColorchange = withColorChange(HelloWorld)
  const HelloWithBorder = withBorder(HelloBorder)
  return (
    <div className="App">
      <HelloWorldColorchange/>
      <HelloWithBorder/>
    </div>
  );
}

export default App;
