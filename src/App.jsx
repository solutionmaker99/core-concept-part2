import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'



function App() {


  const addToFive = (num) => {
    alert(num -5)
  }
  const handleClick = () => {
    alert('button clicked')
  }
  return (
    <>
     
      <h3>React Core Concepts Part 2</h3>
     <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {alert("Button Clicked 2")}}>Second Click</button><br/>
      <button onClick={() => addToFive(10)}>Third</button>

     
      
    </>
  )
}

export default App
