import React, {useState} from 'react'

import Card from './Card'

import './App.css'
//function
const App = () => {
//     const [count, setCount] = useState(0)
//     const [user, setUser] = useState('')

//     const increment = () => {
//         setCount(count + 1)
//     }
//     const handleOnChange = (e) =>{
//         // console.log("e: ", e.target.value)
//         setUser(e.target.value)
//     }
//     return (
//         <div>
//             <div>Count: {count}</div>
//             <button id="increment" onClick={increment}>Increment</button>
//             <br />
//             <input name="user" onChange={handleOnChange} value={user} />
//         </div>
//     )
    return (
        <div className="app-main">
            <Card name="Jellie" age={23} gender="Female" title="Soft Eng"/>
            <Card name="Charles" age={25} gender="Male" title="Soft Eng" />
            <Card name="Jayson" age={26} gender="Male" title="Finance" />
            <Card name="Cheryl" age={27} gender="Female" title="Accountant" />
        </div>
    )
}

export default App