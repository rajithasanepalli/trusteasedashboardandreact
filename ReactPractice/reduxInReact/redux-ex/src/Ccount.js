import React from 'react'
import { UserContext } from './App'

const Ccount = () => {
    return (
        <div>
            <UserContext.Consumer>
                {value => <div>count:{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}

export default Ccount
