import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={handleOnClick}> Add 1 </button>
   {count < 20 && <h1>Esti foarte departe</h1>}
   {count >= 20 && count < 40 && <h1>Te aproprii putin</h1>}
   {count >= 40 && <h1>Mai ai putin si ai ajuns</h1>}
  </div> 
  );
}

export default App
