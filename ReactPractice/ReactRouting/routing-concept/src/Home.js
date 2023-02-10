import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import audio from './myAudio.mp3'
import video from './myVideo.mp4'
const Home = () => {
    const [auth, setAuth] = useState(false)
    if (auth) {
        return <Redirect to='/dashboard' />
    }
    const pathSet = () => setAuth(true)

    return (
        <div>
            <center>
                <h1>Iam home component</h1>
                <button onClick={pathSet}>Login</button>

            </center>
            <center>
                <audio controls>
                    <source src={audio} type="audio/ogg">
                    </source>
                </audio>
            </center>
            <center>
                <video controls width="400px" height="400px">
                    <source src={video} type="video/mp4">

                    </source>
                </video>
            </center>
        </div>
    )
}

export default Home
