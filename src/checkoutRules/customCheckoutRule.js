import createBookAndCountMapObject from "../utils/createBookAndCountMapObject";
import calculatePrice from "../utils/calculatePrice";
import createBookSets from "../utils/createBookSets";
import createBookSetAndCountMapObject from "../utils/createBookSetAndCountMapObject";
import canOptimiseBookSets from "../utils/canOptimiseBookSets";
import getOptimisationPossibilityCount from "../utils/getOptimisationPossibilityCount";
import createOptimisedBookSets from "../utils/createOptimisedBookSets";
export default function customCheckoutRule(cart) {
	const bookAndCountMap = createBookAndCountMapObject(cart);
	let bookSets = createBookSets(bookAndCountMap);
	if (canOptimiseBookSets(bookSets)) {
		bookSets = createOptimisedBookSets(bookSets);
	}
	let total = 0;
	for (const bookSet of bookSets) {
		const bookQuantity = bookSet.length;
		const price = calculatePrice(bookQuantity);
		total += price;
	}
	return total;
}
