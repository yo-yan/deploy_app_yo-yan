import React, { useState } from 'react';

function App() {

  const [state, setState] = useState('');
  const handleClick = () => {
    setState('Helloworld')
  }

  return (

    <div>
      <button onClick={handleClick}>Click me</button>
      {state}
    </div>
  )
}

export default App;
