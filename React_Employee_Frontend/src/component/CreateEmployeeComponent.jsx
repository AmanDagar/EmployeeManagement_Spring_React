import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                firstName: '',
                lastName: '',
                emailId: ''
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler =(event) =>{
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler =(event) =>{
        this.setState({lastName: event.target.value})
    }
    changeEmailIdHandler =(event) =>{
        this.setState({emailId: event.target.value})
    }
    saveEmployee(e){
        e.preventDefault();
        let employee = {first_name: this.state.firstName, last_name: this.state.lastName, email_id: this.state.emailId};
        console.log("Employee -> " + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then((res) => {
            window.location.href = '/employees';
        });
    }
    cancel(){
        window.location.href = '/employees';
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form action="get">
                                    <div className='form-group'>
                                        <label htmlFor="">First Name: </label>
                                        <input placeholder='Enter first name' name='firstName' className='form-control' value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Last Name: </label>
                                        <input placeholder='Enter last name' name='lastName' className='form-control' value={this.state.lastName}
                                            onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Email ID: </label>
                                        <input placeholder='Enter email address' name='emailId' className='form-control' value={this.state.emailId}
                                            onChange={this.changeEmailIdHandler} />
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' type='button' onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;