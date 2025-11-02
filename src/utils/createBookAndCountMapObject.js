export default function createBookAndCountMapObject(cart) {
	const bookAndCountMap = {};
	for (const book of cart) {
		bookAndCountMap[book] = (bookAndCountMap[book] || 0) + 1;
	}
	return bookAndCountMap;
}
