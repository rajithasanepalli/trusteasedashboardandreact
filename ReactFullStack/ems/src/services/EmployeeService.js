import axios from "axios";

const Emp_Get_Base_Url = "http://localhost:8080/api/v1/employelist";
const Emp_Post_Base_Url = "http://localhost:8080/api/v1/saveEmployee";

class EmpployeeService {
    getEmployee() {
        return axios.get(Emp_Get_Base_Url)
    }
    createEmployee(employee) {
        return axios.post(Emp_Post_Base_Url, employee)
    }
    geTEmployeeById(employeeId) {
        return axios.get(Emp_Get_Base_Url + '/' + employeeId)
    }

    upDateEmployee(employeeId, employee) {
        return axios.put(Emp_Get_Base_Url + '/' + employeeId, employee)
    }
    DeleteEmployee(employeeId) {
        return axios.delete(Emp_Get_Base_Url + '/' + employeeId)
    }
}

export default new EmpployeeService()