import createBookSetAndCountMapObject from "./createBookSetAndCountMapObject";

export default function canOptimiseBookSets(bookSets) {
	const bookSetandCountMap = createBookSetAndCountMapObject(bookSets);
	return bookSetandCountMap[3] > 0 && bookSetandCountMap[5] > 0;
}
