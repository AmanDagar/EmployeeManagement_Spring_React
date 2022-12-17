import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    addEmployee(){
        
        window.location.href = "/addEmployee";
    }

    updateEmployee(id){
        
        window.location.href = "/updateEmployee/" + id;
    }
    deleteEmployee(id){
        //window.location.href = "/deleteEmployee/" + id;
        EmployeeService.deleteEmployeeById(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
            alert("Delete Employee with Employee ID: " + id);
        });
    }

componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
        this.setState({employees: res.data});
    });
}
    render() {
        return (
            <div>
                <h2 className="text-center mt-1 mb-2">
                    Employees List
                </h2>
                <div >
                    <button className='btn btn-primary mb-1 ms-0' onClick={this.addEmployee}> Add Employee</button>
                </div>
                
                <div className="row">
                    <table className="table table-dark table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope='col'>First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>
                                            {employee.first_name}
                                        </td>
                                        <td>
                                            {employee.last_name}
                                        </td>
                                        <td>
                                            {employee.email_id}
                                        </td>
                                        <td>
                                            <button className='btn btn-info me-2' onClick={() => this.updateEmployee(employee.id)}> Edit Employee</button>
                                            <button className='btn btn-info' onClick={() => this.deleteEmployee(employee.id)}> Delete Employee</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;