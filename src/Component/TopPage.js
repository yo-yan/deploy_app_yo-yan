import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const TopPage = () => {
    const [data, setDate] = useState([]);
    useEffect(() => {
        Axios.get('https://qiita.com/api/v2/items')
            .then(res => {
                setDate(res.data);
            })
    }, []);

    return (
        <div>
            <Link to='secoundpage'>SecoundPageへ</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Qiita</th>
                        <th>タイトル一覧</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.title}<br></br><a href={element.url}>{element.url}</a></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default TopPage
