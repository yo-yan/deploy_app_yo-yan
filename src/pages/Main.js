import React from 'react';
import { useHistory } from 'react-router-dom'
import firebase from '../config/firebase';
import Button from '@material-ui/core/Button';


const Main = () => {
    const history = useHistory();

    const outButton = () => {
        firebase.auth().signOut()
            .then(function () {
                history.push('/')
                alert('ログアウトしました。')
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
    }
    return (
        <div>
            <h1>Main</h1>
            <Button variant="outlined" onClick={outButton}>Logout</Button><br />
        </div>
    )
}

export default Main
