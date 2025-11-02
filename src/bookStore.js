import calculatePrice from "./utils/calculatePrice";
import validateCartForInvalidBook from "./utils/validateCartForInvalidBook";

export default function bookStore(cart) {
	if (cart.length === 0) {
		throw new Error("The Cart is Empty...");
	}

	validateCartForInvalidBook(cart);

	const bookQuantity = cart.length;
	const price = calculatePrice(bookQuantity);
	return price;
}
