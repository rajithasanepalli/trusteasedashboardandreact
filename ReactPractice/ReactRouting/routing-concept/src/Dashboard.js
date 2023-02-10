import React from 'react'
import myPhoto from './myPhoto.png'
import { UserContext } from './App.js'

const Dashboard = () => {
    return (
        <div>
            <center>
                <h1>

                    <center>
                        <img src={myPhoto} height='100px' width='100px' alt="" />
                    </center>
                    <UserContext.Consumer>
                        {value => <div>{value}</div>}
                    </UserContext.Consumer>

                </h1>

            </center>
        </div>
    )
}

export default Dashboard
