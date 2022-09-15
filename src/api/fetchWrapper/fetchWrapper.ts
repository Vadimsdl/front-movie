import { mainRoutes } from "../../router/routes";
import { API } from "../../common/enums";

async function http(path: string, config: RequestInit) {
    try {
        const request = new Request(path, config);
        const response = await fetch(request);

        if (response.status === 401) {
            return;
        }
        return await response.json();
    } catch (err: any) {
        console.log(err.message);
    }
}

const headers = {
    'Content-Type': 'application/json',
};

const authorizationHeaders = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };

export async function httpQuery<U, T>(method: string, path: string, body?: U): Promise<T> {
    if ((method === 'POST' || method === 'PUT') && authorizationHeaders.Authorization) {
        const config = {
            method,
            headers: {
                ...headers,
                ...authorizationHeaders,
            },
            body: JSON.stringify(body),
        };

        return await http(`${API.mainPath}${path}`, config);
    } else if (method === 'GET' && authorizationHeaders.Authorization) {
        const config = {
            method,
            headers: {
                ...headers,
                ...authorizationHeaders,
            },
        };
        return await http(`${API.mainPath}${path}`, config);
    }else if (method === 'DELETE' && authorizationHeaders.Authorization) {
        const config = {
            method,
            headers: {
                ...headers,
                ...authorizationHeaders,
            },
        };
        return await http(`${API.mainPath}${path}`, config);
    }
    return await http(`${API.mainPath}${path}`, { method, headers });
};

export async function authQuery<T, U>(body: T, path: string): Promise<U> {
    const config = {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
    };

    return await http(`${API.mainPath}${path}`, config);
}
