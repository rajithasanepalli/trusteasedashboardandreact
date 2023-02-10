import React from 'react'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
                    <div>
                        <Link to="/add-employee">
                            <button className='btn btn-outline-light'>
                                Add employee</button></Link>
                    </div>&nbsp;&nbsp;
                    <div>
                        <Link to="/employee">
                            <button className='btn btn-outline-light'>
                                List employees</button></Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
