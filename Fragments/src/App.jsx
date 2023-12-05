import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import FoodItems from './components/FoodItems';
// 'Pulse', 'Green Vegetable', 'Chapati', 'Salad', 'Milk'
function App() {

  return (
    <>
      <h1>Healthy Food</h1>
      {/* <ErrorMessage /> */}
      <FoodItems />
    </>
  )
}

export default App
