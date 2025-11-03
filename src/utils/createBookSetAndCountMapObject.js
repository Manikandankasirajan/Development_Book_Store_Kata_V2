export default function createBookSetAndCountMapObject(bookSets) {
	const bookSetandCountMap = {};
	for (const bookSet of bookSets) {
		if (bookSet.length === 3 || bookSet.length === 5) {
			bookSetandCountMap[bookSet.length] =
				(bookSetandCountMap[bookSet.length] || 0) + 1;
		}
	}
	return bookSetandCountMap;
}
