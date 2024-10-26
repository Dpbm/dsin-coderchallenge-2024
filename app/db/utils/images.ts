import { defaultImage } from '@/app/constants';

export default async function getImage() {
	try {
		const randomPage = Math.floor(Math.random() * 60) + 1;
		const res = await fetch(
			`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q="spaceship+starship+space"&category="science"&safesearch="true"&per_page="10"&page="${randomPage}"`
		);
		const { hits } = await res.json();

		if (hits.length <= 0) return defaultImage;
		const randomIndex = Math.floor(Math.random() * hits.length);
		return hits[randomIndex]['webformatURL'];
	} catch (error) {
		console.error(`Error on get Image: ${error}`);
		return defaultImage;
	}
}
