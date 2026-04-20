import { Greeting } from './components/Greeting'
import { Cards } from './components/Cards'
import "./App.css"
import { Cards_upgrade } from './components/Cards_upgrade'
function App() {
  const cards = [
    {
      title: "React",
      description: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "Angular",
      description: "Angular is a TypeScript-based open-source web application framework."
    },
    {
      title: "Vue",
      description: "Vue is a progressive JavaScript framework for building user interfaces."
    },
    {
      title: "React",
      description: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "Angular",
      description: "Angular is a TypeScript-based open-source web application framework."
    },
    {
      title: "Vue",
      description: "Vue is a progressive JavaScript framework for building user interfaces."
    },
    {
      title: "React",
      description: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "Angular",
      description: "Angular is a TypeScript-based open-source web application framework."
    },
    {
      title: "Vue",
      description: "Vue is a progressive JavaScript framework for building user interfaces."
    }
  ]
  return (<div className='cardContainer'>
    <Greeting name="Yashu" />
    <Cards Card={cards} />
    Toggle
  </div>)
}
export default App
