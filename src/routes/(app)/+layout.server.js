import { redirect } from '@sveltejs/kit';
import { getUserByToken } from '../../lib/api/api.js';
import userStore from './storeUser.js'

export async function load({ cookies }) {

    const token = cookies.get('token');

    if (!token) {
        throw redirect(307, '/login')
    } 	
    
    return {
        token
    }
}
