import calculatePrice from "./utils/calculatePrice";
import hasDuplicates from "./utils/hasDuplicates";
import validateCartForInvalidBook from "./utils/validateCartForInvalidBook";

export default function bookStore(cart) {
	if (cart.length === 0) {
		throw new Error("The Cart is Empty...");
	}

	validateCartForInvalidBook(cart);

	if (hasDuplicates(cart)) {
		return "The cart has duplication...";
	} else {
		const bookQuantity = cart.length;
		const price = calculatePrice(bookQuantity);
		return price;
	}
}
