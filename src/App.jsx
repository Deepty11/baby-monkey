import './App.css'
import StatusChip from './components/StatusChip'
import { items } from './Utils/items'
import dateDiffFromCurrentDate from './Utils/DateUtils'
import { useEffect, useState } from 'react'
import CountdownSection from './components/CountdownSection'

const App = () => {
  const [timeLeft, setTimeLeft] = useState(dateDiffFromCurrentDate())

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeLeft(dateDiffFromCurrentDate())
    }, 1000)

    return () => clearInterval(timeInterval) // cleanup
  }, [])

  return <>
    <div>
      <h1 className='font-dancing text-purple-950 text-4xl pb-5'>👶🏻 Baby Is Coming Soon!! 🐒</h1>
      <h2 className='text-purple-950 text-3xl pb-5'>In November 6, 2025</h2>
      <CountdownSection timeLeft={timeLeft}/>
      
      <div className='rounded-lg p-1.5 bg-gradient-to-r from-amber-300 to-amber-200'>
        <h2 className='text-pink-950 text-2xl font-bold flex p-3'>Things to purchase:</h2>
        <ul className='p-2.5'>
          {items.map(item => 
            <li className='flex items-center justify-between gap-10 rounded-sm bg-white p-2.5 mb-1 text-black'>
              {item.name}
              <StatusChip status={item.status}/>
            </li>
          )}
        </ul>
      </div>
     
    </div>
  </>
}

export default App
