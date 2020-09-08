import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';


function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <ButtonGroup size="sm" className="mb-2">
        <Button onClick={() => setCount(count + 1)}> いいね！</Button>
        <Button onClick={() => setCount(count - 1)}>良くないね。</Button>
        <Button onClick={() => setCount(0)}>reset</Button>
      </ButtonGroup>
      {count}
    </div >
  )
}

export default App;
