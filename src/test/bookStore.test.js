import bookStore from "../bookStore";
test("throws exception for empty cart", () => {
	const cart = [];
	expect(() => bookStore(cart)).toThrow();
	expect(() => bookStore(cart)).toThrow(Error);
	expect(() => bookStore(cart)).toThrow("The Cart is Empty...");
});

test("returns 50 for single book purchase", () => {
	const cart = ["Clean Code"];
	expect(bookStore(cart)).toBe(50);
});

test("throws exception for invalid books in the cart", () => {
	const cart = ["Clean"];
	expect(() => bookStore(cart)).toThrow();
	expect(() => bookStore(cart)).toThrow(Error);
	expect(() => bookStore(cart)).toThrow("Invalid Book in the cart...");
});
