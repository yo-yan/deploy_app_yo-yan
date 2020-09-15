import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function App() {

  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  const handleClick = () => {
    setValue(text)
  }

  return (
    <div>
      <InputGroup className="mb-3" >
        <FormControl
          aria-describedby="basic-addon2"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleClick} >Button</Button>{value}
        </InputGroup.Append>
      </InputGroup>
    </div >
  )
}

export default App;
