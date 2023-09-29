import { useState } from 'react'

function DistantaText({ count }) {
  if (count < 20 ) {
    return <h1>Esti foarte departe</h1>;
  }

  if (count >= 20 && count < 40 ) {
    return <h1>Te aproprii putin</h1>;
  }

  if (count >= 40 && count < 60 ) {
    return <h1>Aproape ai ajuns</h1>;
  }

  if (count >= 60 && count < 80) {
    return <h1>Ai ajuns la destinatie</h1>;
  }

    return <h1>Ai depasit destinatia =]]]]</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={handleOnClick}> Add 1 </button>
    <DistantaText count={count} />
  </div> 
  );
}

export default App
