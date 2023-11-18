import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const token = cookies.get('token');

    if (!token) {
        throw redirect(200, login)
    } else {
        console.log('yes')
    }

	return {
		token
	};
}
