import { FaClock, FaRegCheckCircle } from 'react-icons/fa'
import './App.css'
import StatusChip from './components/StatusChip'

function App() {
  const Status = {
    PENDING: "Pending",
    DONE: "Done",
  }

  const items = [
    { id: 0, name: "Nima", status: Status.PENDING },
    { id: 1, name: "Towels", status: Status.PENDING },
    { id: 2, name: "Hand/ foot gloves", status: Status.PENDING },  
    { id: 3, name: "Winter Clothes", status: Status.PENDING },
    { id: 4, name: "Wiper -- infinity", status: Status.PENDING },
    { id: 5, name: "Soft handkerchief", status: Status.PENDING },
    { id: 6, name: "Breast feeding pillow", status: Status.DONE },
    { id: 7, name: "No likeage mat", status: Status.PENDING },
    { id: 8, name: "Pillow and side pillow", status: Status.PENDING },
    { id: 9, name: "Moshari", status: Status.PENDING },
    { id: 10, name: "Breast pump electric", status: Status.DONE },
    { id: 11, name: "Fider", status: Status.PENDING },
    { id: 12, name: "Fider cleaning brush set", status: Status.PENDING },
    { id: 13, name: "Baby Toiletries", status: Status.PENDING },
    { id: 14, name: "Baby Cot", status: Status.PENDING },
    { id: 15, name: "gamla/ bathtub", status: Status.PENDING },
    { id: 16, name: "Baby travelling bag", status: Status.PENDING },
    { id: 17, name: "Baby wardrobe", status: Status.PENDING },
  ]

  return <>
    <div>
      <h1 className='font-dancing text-purple-950 text-4xl pb-5'>👶🏻 Baby Is Coming Soon!! 👶🏻</h1>
      <h2 className='text-purple-950 text-4xl pb-5'>In November 6, 2025</h2>
      
      <div className='rounded-lg p-1.5 bg-amber-200'>
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
