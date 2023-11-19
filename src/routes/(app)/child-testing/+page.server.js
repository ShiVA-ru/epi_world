import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			numQuation: post.numQuation,
			quation: post.quation,
            answer1: post.answer3,
            answer2: post.answer2,
            answer3: post.answer1
		}))
	};
}