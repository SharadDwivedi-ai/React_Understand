import { useState } from 'react'
import './App.css'
import { Cardlist } from './components/Cardlist';

function App() {
  // Lec 8 - React youtube 
  const [cards, setCards] = useState([{
    title: "Data Structures",
    desc: "Ways of organizing data (arrays, linked lists, trees, graphs) to enable efficient access and modification."
  },
  {
    title: "React",
    desc: "Ways of organizing data (arrays, linked lists, trees, graphs) to enable efficient access and modification."
  },
  {
    title: "Data Structures",
    desc: "Ways of organizing data (arrays, linked lists, trees, graphs) to enable efficient access and modification."
  },
  {
    title: "React",
    desc: "Ways of organizing data (arrays, linked lists, trees, graphs) to enable efficient access and modification."
  }
  ]);

  // Day3- Chatgpt program practice 
  // const [enrollCourse, setEnrollCourse] = useState([]);

  return (
    <div>
      <h1 className='text-center p-4 font-bold bg-violet-500 text-white'>My Upgraded Courses</h1>
      <div className='bg-sky-900'>
        <Cardlist data={cards} />
      </div>
    </div>
  )
}

export default App
