export default function bookStore(cart) {
	if (cart.length === 0) {
		throw new Error("The Cart is Empty...");
	}
}
