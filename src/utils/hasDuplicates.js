import createBookAndCountMapObject from "./createBookAndCountMapObject";

export default function hasDuplicates(cart) {
	const bookAndCountMap = createBookAndCountMapObject(cart);
	return Object.values(bookAndCountMap).some((count) => count > 1);
}
