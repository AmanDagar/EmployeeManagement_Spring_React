import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }
    deleteEmployeeById(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}

export default new EmployeeService()