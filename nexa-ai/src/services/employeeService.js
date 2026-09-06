import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

export const getEmployees = async () => {
    const response = await axios.get(API_URL);

    return response.data.employees;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(API_URL, employee);

    return response.data.employee;
};