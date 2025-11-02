import bookStore from "../bookStore";
test("throws exception for empty cart", () => {
	const cart = [];
	expect(() => bookStore(cart)).toThrow();
	expect(() => bookStore(cart)).toThrow(Error);
	expect(() => bookStore(cart)).toThrow("The Cart is Empty...");
});
