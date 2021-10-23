import React, { Component } from 'react'
import './HeaderComponent.css'
import logo from '../assets/images/logo.png'


export class HeaderComponent extends Component {
    render(){
    return (
        <header className="header-content header">
            <div className ="log-content">
                <img src ={logo} alt="logo"></img>
                <span className="emp-text-content">
                    <span className="emp-text">EMPLOYEE</span>
                    <span className="emp-text emp-payroll">PAYROLL</span>
                </span>
            </div>
        </header>
    )
}
}
export default HeaderComponent;
