import React, { useState } from 'react';
import { createData, readData, updateData, deleteDate } from '../config/firebase';
import { mycreateData } from '../config/firebase'
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField } from '@material-ui/core';

const Main = () => {

    const [myfirst, setMyfirst] = useState('')
    const [mylast, setMylast] = useState('')
    const [myborn, setMyborn] = useState('')
    const [mydata, setMydata] = useState('')

    const handleData = async () => {
        await mycreateData(myfirst, mylast, myborn, mydata);
    }

    const handleCreate = async () => {
        await createData();
    }

    const handleread = async () => {
        await readData();
    }

    const handleUpdate = async () => {
        await updateData();
    }

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
        </div >
    )
}

export default Main
