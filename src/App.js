import React, { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState('');
  const [rival, setRival] = useState('');
  const [judge, setJudge] = useState('');
  useEffect(() => {
    judgement()
  })
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
      }
    }
  }
  return (
    <div>
      <button onClick={handlfire}>火</button>
      <button onClick={handlwater}>水</button>
      <button onClick={handlreef}>草</button>

      <h2>あなたのタイプ：{user}</h2>
      <h2>敵のタイプ：{rival}</h2>
      <h2>勝敗結果：{judge}</h2>
    </div>
  )
}

export default App
