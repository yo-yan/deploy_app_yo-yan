import React, { useState } from 'react';

function App() {
  const [jyanken, setJyanken] = useState();
  const [cpujanken, setCpujanken] = useState();

  const handlegu = () => {
    setJyanken('グー')
    cpuhande()
  }
  const handletyoki = () => {
    setJyanken('チョキ')
    cpuhande()
  }
  const handlepaa = () => {
    setJyanken('パー')
    cpuhande()
  }

  const cpuhande = () => {
    const num = Math.floor(Math.random() * 3)
    if (num === 0) {
      setCpujanken('グー')
    } else if (num === 1) {
      setCpujanken('チョキ')
    } else {
      setCpujanken('パー')
    }



  }

  return (
    <div>
      <h1>ジャンケンをしましょう！！</h1>

      <button onClick={handlegu}>グー</button>
      <button onClick={handletyoki}>チョキ</button>
      <button onClick={handlepaa}>パー</button>

      <h2>あなたの手：{jyanken}</h2>
      <h2>CPUの手：{cpujanken}</h2>

    </div>
  )
}

export default App;
