
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


const EmployeeListComponent = () => {

    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getEmployee().then((res) => {
            console.log(res.data)
            setEmployee(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    const deleteEmployee = (id) => {

        console.log(id);
        EmployeeService.DeleteEmployee(id).then((res) => {
            console.log(res);
            getAllEmployees();

        }).catch(err => {
            console.log(err)
        })

    }

    return (

        <div>


            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map(
                                employee =>
                                    <tr key={employee.employeeId}>
                                        <td>{employee.employeeId}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <Link to={`edit-employee/${employee.employeeId}`}>
                                                <button className='btn btn-primary'>Update</button>&nbsp;

                                            </Link>
                                            <button onClick={() => deleteEmployee(employee.employeeId)}
                                                className='btn btn-danger'>
                                                Delete</button>

                                        </td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}



export default EmployeeListComponent
