import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			imgSrc: post.imgSrc,
            title: post.title,
            date: post.date
		}))
	};
}