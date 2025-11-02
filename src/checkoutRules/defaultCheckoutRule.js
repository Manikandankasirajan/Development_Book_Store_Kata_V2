import calculatePrice from "../utils/calculatePrice";
export default function defaultCheckoutRule(cart) {
	const bookQuantity = cart.length;
	const price = calculatePrice(bookQuantity);
	return price;
}
