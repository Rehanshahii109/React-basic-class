import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    username: "rehan",
    rehan: 21
  }

  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind test
      </h1>

      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
  className="w-24 h-24 rounded-full mx-auto"
  src="https://images.unsplash.com/photo-1628126907372-761f54441c1b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Sarah Dayan"
  width="384"
  height="512"
/>

        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-400">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

    <Card username="chaiaurcode" btnText="click me" someObje={myObject}/>

    <Card username="rehan" btnText="visit me" someObje={newArr}/>
    


    


    </>
  )
}

export default App
