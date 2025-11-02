import calculatePrice from "./utils/calculatePrice";

export default function bookStore(cart) {
	if (cart.length === 0) {
		throw new Error("The Cart is Empty...");
	}
	const bookQuantity = cart.length;
	const price = calculatePrice(bookQuantity);
	return price;
}
