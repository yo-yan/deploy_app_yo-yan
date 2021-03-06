import React, { useState } from 'react';
import { createData, readData, updateData, deleteDate, specifiedData } from '../config/firebase';
import { mycreateData } from '../config/firebase'
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField } from '@material-ui/core';

const Main = () => {

    const [myfirst, setMyfirst] = useState('')
    const [mylast, setMylast] = useState('')
    const [myborn, setMyborn] = useState('')
    const [mydata, setMydata] = useState('')

    //指定データ取得
    const handleInformation = async () => {
        await specifiedData();
    }
    //userCreatedata
    const handleData = async () => {
        await mycreateData(myfirst, mylast, myborn, mydata);
    }
    //create
    const handleCreate = async () => {
        await createData();
    }
    //read
    const handleread = async () => {
        await readData();
    }
    //update
    const handleUpdate = async () => {
        await updateData();
    }
    //delete
    const handleDelete = async () => {
        await deleteDate();
    }

    return (
        <div>
            <h1>Main</h1>
            <TextField id="mydata" label="userid" value={mydata} onChange={e => setMydata(e.target.value)} />
            <TextField id="myfirst" label="Fist" value={myfirst} onChange={e => setMyfirst(e.target.value)} />
            <TextField id="mylast" label="Last" value={mylast} onChange={e => setMylast(e.target.value)} />
            <TextField id="myborn" label="Born" value={myborn} onChange={e => setMyborn(e.target.value)} />
            <br />
            <Button variant="outlined" onClick={handleData}>MY DATA CREATE</Button>
            <Button variant="outlined" onClick={handleCreate}>create</Button>
            <Button variant="outlined" onClick={handleread}>read</Button>
            <Button variant="outlined" onClick={handleUpdate}>update</Button>
            <Button variant="outlined" onClick={handleDelete}>delete</Button>
            <Button variant="outlined" onClick={handleInformation}>情報</Button>
        </div >
    )
}

export default Main
