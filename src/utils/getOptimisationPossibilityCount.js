import createBookSetAndCountMapObject from "./createBookSetAndCountMapObject";
export default function getOptimisationPossibilityCount(bookSets) {
	const bookSetandCountMap = createBookSetAndCountMapObject(bookSets);
	return Math.min(...Object.values(bookSetandCountMap));
}
