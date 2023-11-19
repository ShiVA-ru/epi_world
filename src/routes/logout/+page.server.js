import userStore from '../(app)/storeUser.js';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    cookies.delete('token');

    userStore.update(() => {
        return null;
    });

    throw redirect(307, "/login");
}
