import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			numQuation: post.numQuation,
			quation: post.quation,
            answer: post.answer,
		}))
	};
}