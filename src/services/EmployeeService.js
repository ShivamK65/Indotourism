import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const DESTINATION = "http://localhost:8080/api/v1/destination";


class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getDestination(){
        return axios.get(DESTINATION);
    }

    createEmployee(employee){
	alert('Register Successfully');
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
        
    }
    

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    getDestinationById(employeeId){
        return axios.get(DESTINATION + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()