import {apiRequest} from "../services/apiServices";

export async function all() {
    const apiObject = {
        method: 'GET',
        url: "https://examination.24x7retail.com/api/v1.0/Employees",
        params: {},
        headers: {
            'apiToken': "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
        }
    }

    return apiRequest(apiObject);
}
