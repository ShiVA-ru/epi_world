export const apiUrl = "https://backend-epimir-production.up.railway.app/api";

export const getUser = (id) => fetch(`${apiUrl}/users/${id}`);


export const getUserByToken = (token) => fetch(`${apiUrl}/users/me`, {
    headers: {
        'Authorization': `Bearer ${token}`
    },
});

export const registerUser = (data) => fetch(`${apiUrl}/auth/local`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
}) 
