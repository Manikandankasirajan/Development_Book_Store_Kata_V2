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

describe("test cases for two book combo", () => {
	test("return 95 by applying 5% discount for two unique book purchase", () => {
		const cart = ["Clean Code", "The Clean Coder"];
		expect(bookStore(cart)).toBe(95);
	});

	test("return 100 for two same book in the cart", () => {
		const cart = ["Clean Code", "Clean Code"];
		expect(bookStore(cart)).toBe(100);
	});
});

describe("test cases for three book combo", () => {
	test("return 135 for three unique book purchase", () => {
		const cart = ["Clean Code", "The Clean Coder", "Clean Architecture"];
		expect(bookStore(cart)).toBe(135);
	});

	test("return 145 by apply 5% discount for two unique book and no discount for copy", () => {
		const cart = ["Clean Code", "Clean Code", "The Clean Coder"];
		expect(bookStore(cart)).toBe(145);
	});

	test("return 150 since single book purchase has no discount", () => {
		const cart = ["Clean Code", "Clean Code", "Clean Code"];
		expect(bookStore(cart)).toBe(150);
	});
});

describe("test cases for four book combo", () => {
	test("return 160 for four unique book purchase", () => {
		const cart = [
			"Clean Code",
			"The Clean Coder",
			"Clean Architecture",
			"Test Driven Development by Example",
		];
		expect(bookStore(cart)).toBe(160);
	});
	test("return 185 for two copy of same book and two unique book", () => {
		const cart = [
			"Clean Code",
			"Clean Code",
			"Clean Architecture",
			"Test Driven Development by Example",
		];
		expect(bookStore(cart)).toBe(185);
	});
	test("return 195 for three copy of same book and one unique book", () => {
		const cart = [
			"Clean Code",
			"Clean Code",
			"Clean Code",
			"Test Driven Development by Example",
		];
		expect(bookStore(cart)).toBe(195);
	});
	test("return 200 for four copy of same book", () => {
		const cart = ["Clean Code", "Clean Code", "Clean Code", "Clean Code"];
		expect(bookStore(cart)).toBe(200);
	});
});

test("return 187 for five unique book purchase", () => {
	const cart = [
		"Clean Code",
		"The Clean Coder",
		"Clean Architecture",
		"Test Driven Development by Example",
		"Working Effectively With Legacy Code",
	];
	expect(bookStore(cart)).toBe(187);
});
