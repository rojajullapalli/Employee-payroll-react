import React, { Component } from 'react'

export class AddComponent extends Component {
    render(){
    return (
        <div>
        <table border="true">
        <thead>
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {this.state.employees.map(employee=>(
                <tr key={employee.empId}>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
                 </tr>
                ))}
        </tbody>
        </table>
        </div>
    )
}
}
export default AddComponent

