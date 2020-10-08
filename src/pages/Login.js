import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();
    const clickButton = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/main')
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                // ...
                if (errorCode === 'auth/user-not-found') {
                    alert('指定されたユーザーは存在しません。')
                } else if (errorCode === 'auth/wrong-password') {
                    alert('パスワードの入力に誤りがあります。')
                } else if (errorCode === 'auth/invalid-email') {
                    alert('入力欄が空白です。')
                } else if (errorCode === 'auth/user-disabled') {
                    alert('このユーザーは無効です。')
                }
            });
    }



    return (
        <div className='text' >
            <h1>Login</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={clickButton}>Login</Button><br />
            <Link to='/createUser'>アカウント作成</Link>
        </div>
    )
}

export default Login
