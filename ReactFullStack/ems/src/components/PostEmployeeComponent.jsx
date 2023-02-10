import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'


const PostEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmail] = useState('');
    const navigate = useNavigate();
    const param = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const emp = { firstName, lastName, emailId }
        if (param.id) {
            EmployeeService.upDateEmployee(param.id, emp).then((res) => {
                navigate('/employee')
            })
        }
        else {
            EmployeeService.createEmployee(emp).then((response) => {
                console.log(response.data);
                navigate('/employee')

            }).catch(error => {
                console.log(error)
            })
        }
    }
    useEffect(() => {
        EmployeeService.geTEmployeeById(param.id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.emailId);


        }).catch(err => {
            console.log(err)
        })
    }, [])

    const title = () => {
        if (param.id) {
            console.log(param.id)
            return <h2 className='text-center'>Update employee</h2>
        }
        else {
            return <h2 className='text-center'>Add employee</h2>
        }
    }
    return (
        <div><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 '>
                        {title()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name</label><br />
                                    <input type="text" value={firstName}
                                        placeholder="Enter first name" name='firstName'
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name</label><br />
                                    <input type="text" value={lastName}
                                        placeholder="Enter last name" name='lastName'
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>EmailId</label><br />
                                    <input type="email" value={emailId}
                                        placeholder="Enter email id" name='emailId'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                &nbsp;
                                <Link to='/employee'>
                                    <button className='btn btn-danger'>
                                        Cancel
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostEmployeeComponent
