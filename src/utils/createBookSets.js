export default function createBookSets(bookAndCountMap) {
	const bookSets = [];
	while (Object.values(bookAndCountMap).some((count) => count > 0)) {
		const currentSets = [];
		for (const [title, count] of Object.entries(bookAndCountMap)) {
			if (count > 0) {
				bookAndCountMap[title]--;
				currentSets.push(title);
			}
		}
		bookSets.push(currentSets);
	}
	return bookSets;
}
