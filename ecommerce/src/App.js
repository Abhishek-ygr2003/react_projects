import React from 'react'
import{useState} from 'react';

export const App = () => {
    const[count, setCount] = useState(1)
  return (
    <div>
        {count}
        <button onClick={()=> setCount(count+1)}>Change</button>
    </div>
  )
}
export default App;
