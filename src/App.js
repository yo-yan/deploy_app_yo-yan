import React, { useState, useEffect } from 'react'

const App = () => {
<<<<<<< HEAD
  const [user, setUser] = useState('');
  const [rival, setRival] = useState('');
=======

  const [user, setUser] = useState('');
  const [cpu, setCpu] = useState('');
>>>>>>> a5c2ec5849fdbb6a5b5fe3547128c26859d9144e
  const [judge, setJudge] = useState('');
  useEffect(() => {
    judgement()
  })
<<<<<<< HEAD
  //プレイヤーのタイプ
  const handlfire = () => {
    setUser('火')
    rivalhandl()
  }
  const handlwater = () => {
    setUser('水')
    rivalhandl()
  }
  const handlreef = () => {
    setUser('草')
    rivalhandl()
  }
  //敵のタイプ
  const rivalhandl = () => {
    const num = Math.floor(Math.random() * 3)
    if (num === 0) {
      setRival('火')
    } else if (num === 1) {
      setRival('水')
    } else {
      setRival('草')
    }
  }
  //勝敗結果
  const judgement = () => {
    if (user !== '') {
      if (user === rival) {
        setJudge('通常ダメージ')
      } else if (user === '火' && rival === '水') {
        setJudge('効果はいまひとつ')
      } else if (user === '火' && rival === '草') {
        setJudge('効果は抜群')
      } else if (user === '水' && rival === '草') {
        setJudge('効果はいまひとつ')
      } else if (user === '水' && rival === '火') {
        setJudge('効果は抜群')
      } else if (user === '草' && rival === '火') {
        setJudge('効果はいまひとつ')
      } else if (user === '草' && rival === '水') {
        setJudge('効果は抜群')
=======

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
>>>>>>> a5c2ec5849fdbb6a5b5fe3547128c26859d9144e
      }
    }
  }
  return (
    <div>
<<<<<<< HEAD
      <button onClick={handlfire}>火</button>
      <button onClick={handlwater}>水</button>
      <button onClick={handlreef}>草</button>

      <h2>あなたのタイプ：{user}</h2>
      <h2>敵のタイプ：{rival}</h2>
=======
      <h1>ジャンケンをしましょう！！</h1>
      <button onClick={handlegu}>グー</button>
      <button onClick={handletyoki}>チョキ</button>
      <button onClick={handlepa}>パー</button>
      <h2>あなたの手：{user}</h2>
      <h2>CPUの手：{cpu}</h2>
>>>>>>> a5c2ec5849fdbb6a5b5fe3547128c26859d9144e
      <h2>勝敗結果：{judge}</h2>
    </div>
  )
}

export default App
