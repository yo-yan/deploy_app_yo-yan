import React, { useState, useEffect } from 'react';

function App() {
  const [jyanken, setJyanken] = useState('');
  const [cpujanken, setCpujanken] = useState('');
  const [judge, setJudge] = useState('');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    judgement()

  }, [counter])
  //プレイヤーの手
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

  //CPUの手
  const cpuhande = () => {
    const num = Math.floor(Math.random() * 3)
    if (num === 0) {
      setCpujanken('グー')
    } else if (num === 1) {
      setCpujanken('チョキ')
    } else {
      setCpujanken('パー')
    }
    setCounter(prev => prev + 1)
  }

  //判定結果
  const judgement = () => {
    if (jyanken !== '') {
      if (jyanken === cpujanken) {
        setJudge('あいこです')
      } else if (jyanken === 'グー' && cpujanken === 'チョキ') {
        setJudge('あなたの勝ちです')
      } else if (jyanken === 'グー' && cpujanken === 'パー') {
        setJudge('あなたの負けです')
      } else if (jyanken === 'チョキ' && cpujanken === 'パー') {
        setJudge('あなたの勝ちです')
      } else if (jyanken === 'チョキ' && cpujanken === 'グー') {
        setJudge('あなたの負けです')
      } else if (jyanken === 'パー' && cpujanken === 'グー') {
        setJudge('あなたの勝ちです')
      } else if (jyanken === 'パー' && cpujanken === 'チョキ') {
        setJudge('あなたの負けです')
      }
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
      <h2>判定：{judge}</h2>

    </div>
  )
}

export default App;
