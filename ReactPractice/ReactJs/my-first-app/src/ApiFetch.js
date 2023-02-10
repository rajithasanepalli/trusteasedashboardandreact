import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiFetch = () => {

    const [myData, setData] = useState([])
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(result => result.json())
        //     .then(data => setData(data))

        axios.get('https://jsonplaceholder.typicode.com/todos').then(result => setData(result.data))



    }, [])
    return (
        <div>

            {myData.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default ApiFetch
