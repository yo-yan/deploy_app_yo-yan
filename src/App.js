import React, { useState, useEffect } from 'react'

const App = () => {

  const [user, setUser] = useState('');
  const [cpu, setCpu] = useState('');
  const [judge, setJudge] = useState('');
  useEffect(() => {
    judgement()
  })

  //プライヤーの手
  const handlegu = () => {
    setUser('グー')
    cpuhand()
  }
  const handletyoki = () => {
    setUser('チョキ')
    cpuhand()
  }
  const handlepa = () => {
    setUser('パー')
    cpuhand()
  }
  //CPUの手
  const cpuhand = () => {
    const num = Math.floor(Math.random() * 3)
    if (num === 0) {
      setCpu('グー')
    } else if (num === 1) {
      setCpu('チョキ')
    } else {
      setCpu('パー')
    }
  }
  //判定結果
  const judgement = () => {
    if (user !== '') {
      if (user === cpu) {
        setJudge('あいこです')
      } else if (user === 'グー' && cpu === 'チョキ') {
        setJudge('あなたの勝ちです！')
      } else if (user === 'グー' && cpu === 'パー') {
        setJudge('あなたの負けです。')
      } else if (user === 'チョキ' && cpu === 'パー') {
        setJudge('あなたの勝ちです！')
      } else if (user === 'チョキ' && cpu === 'グー') {
        setJudge('あなたの負けです。')
      } else if (user === 'パー' && cpu === 'グー') {
        setJudge('あなたの勝ちです！')
      } else if (user === 'パー' && cpu === 'チョキ') {
        setJudge('あなたの負けです。')
      }
    }
  }

  return (
    <div>
      <h1>ジャンケンをしましょう！！</h1>
      <button onClick={handlegu}>グー</button>
      <button onClick={handletyoki}>チョキ</button>
      <button onClick={handlepa}>パー</button>
      <h2>あなたの手：{user}</h2>
      <h2>CPUの手：{cpu}</h2>
      <h2>勝敗結果：{judge}</h2>
    </div>
  )
}

export default App
