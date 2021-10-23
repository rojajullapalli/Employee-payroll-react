import React, { Component } from 'react'
import './HeaderComponent.css'
import add from '../assets/icons/add-24px.svg'
import HeaderComponent from './HeaderComponent'
import HttpService from './../service/EmployeeService';

export class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        this.getEmployees();
    }
getEmployees = () => {
        HttpService.getEmployeeList().then(result => {
            console.log(result);
            this.setState(
                { employees: result.data }
            );
            console.log(result.data);
        }).catch(error => console.log(error))

    }
    render(){
    return (
        <div>
            <HeaderComponent/>
        <div className="main-content">
            <div className="header-content">
            <div className="emp-detail-text">
            EmployeeDetails<div className = "emp-count">10</div>
            <div>
                <a href ="add.html" className="add-button">
                    <img src={add} alt="Add User Logo"></img>Add User
                </a>
            </div>
        </div>
        </div>
        </div>
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
export default HomeComponent




