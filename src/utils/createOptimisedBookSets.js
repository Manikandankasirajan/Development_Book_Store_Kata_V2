import getOptimisationPossibilityCount from "./getOptimisationPossibilityCount";
export default function createOptimisedBookSets(bookSets) {
	const optimisationPosibility = getOptimisationPossibilityCount(bookSets);
	for (let i = 0; i < optimisationPosibility; i++) {
		const bookSetOf5 = bookSets.find((bookSet) => bookSet.length === 5);
		const bookSetOf3 = bookSets.find((bookSet) => bookSet.length === 3);
		bookSetOf3.push(bookSetOf5.pop());
	}
	return bookSets;
}
