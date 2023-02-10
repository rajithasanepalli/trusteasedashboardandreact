import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutUs = () => {
    let history = useHistory()
    return (
        <div>
            <center>
                <h1>Iam from about page</h1>
                <button onClick={() => history.push('/dashboard')}>useHostory</button>
            </center>
        </div>
    )
}

export default AboutUs
