import {apiRequest} from "../services/apiServices";

export async function geAllEmployees() {
    const apiObject = {
        method: 'GET',
        url: process.env.BASE_URL+"/api/v1.0/Employees",
        params: {},
        headers: {
            'apiToken': process.env.API_KEY,
        }
    }

    return apiRequest(apiObject);
}

export async function addEmployee(employeeData) {
    const apiObject = {
        method: 'POST',
        url: process.env.BASE_URL + "/api/v1.0/Employees",
        headers: {
            'apiToken': process.env.API_KEY,
            'Content-Type': 'application/json',
        },
        data: employeeData,
    }

    return apiRequest(apiObject);
}

export async function updateEmployee(employeeId, updatedData) {
    const apiObject = {
        method: 'PUT',
        url: `${process.env.BASE_URL}/api/v1.0/Employees/${employeeId}`,
        headers: {
            'apiToken': process.env.API_KEY,
            'Content-Type': 'application/json',
        },
        data: updatedData,
    }

    return apiRequest(apiObject);
}

export async function deleteEmployee(employeeId) {
    const apiObject = {
        method: 'DELETE',
        url: `${process.env.BASE_URL}/api/v1.0/Employees/${employeeId}`,
        headers: {
            'apiToken': process.env.API_KEY,
        }
    }

    return apiRequest(apiObject);
}

