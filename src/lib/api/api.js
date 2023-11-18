export const apiUrl = "http://localhost:1337/api";

export const getUser = (id) => fetch(`${apiUrl}/users/${id}`);

export const registerUser = (data) => fetch(`${apiUrl}/auth/local`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
}) 
