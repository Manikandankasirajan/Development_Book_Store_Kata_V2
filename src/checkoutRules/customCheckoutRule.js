import createBookAndCountMapObject from "../utils/createBookAndCountMapObject";
import calculatePrice from "../utils/calculatePrice";
import createBookSets from "../utils/createBookSets";
export default function customCheckoutRule(cart) {
	const bookAndCountMap = createBookAndCountMapObject(cart);
	const bookSets = createBookSets(bookAndCountMap);
	let total = 0;
	for (const bookSet of bookSets) {
		const bookQuantity = bookSet.length;
		const price = calculatePrice(bookQuantity);
		total += price;
	}
	return total;
}
