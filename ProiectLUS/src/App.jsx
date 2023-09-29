import { useState } from 'react'

function DistantaText({ count }) {
  if (count < 20 ) {
    return <h1 className="Esti-foarte-departe">Esti foarte departe</h1>;
  }

  if (count >= 20 && count < 40 ) {
    return <h1 className="Te-aproprii-putin">Te aproprii putin</h1>;
  }

  if (count >= 40 && count < 60 ) {
    return <h1 className="Aproape-ai-ajuns">Aproape ai ajuns</h1>;
  }

  if (count >= 60 && count < 80) {
    return <h1 className="Ai-ajuns-la-destinatie">Ai ajuns la destinatie</h1>;
  }

    return <h1 className="Ai-depasit-destinatia">Ai depasit destinatia =]]]]</h1>;
};

function App() {
  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1);
  };

  const handleOffClick = () => {
    setCount(count - 1);
  };

  return (
  <div>
    <h1>Te afli la </h1>
    <h1>{count} km</h1>
    <button onClick={handleOffClick}> - </button>
    <button onClick={handleOnClick}> + </button>
    <h1>Momentan :</h1>
    <DistantaText count={count} />
  </div> 
  );
}

export default App
