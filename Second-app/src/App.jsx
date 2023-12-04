// import './App.css'
import KdButton from "./Components/KdButton";
import RandomNumber from "./Components/RandomNumber";
import Hello from "./Hello"
function App() {
  return <>
    <h1>Hello World</h1>
    {/* Custom Component */}
    <KdButton />
    {/* Importing Future Component */}
    <Hello />
    {/* Random Number */}
    <RandomNumber />
    {/* Reusability Of Code */}
    <RandomNumber />
    <RandomNumber />
    <RandomNumber />
    <RandomNumber />
  </>

}
export default App;