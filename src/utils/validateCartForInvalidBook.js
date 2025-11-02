const BOOK_LIST = [
	"Clean Code",
	"The Clean Coder",
	"Clean Architecture",
	"Test Driven Development by Example",
	"Working Effectively With Legacy Code",
];

export default function validateCartForInvalidBook(cart) {
	for (const book of cart) {
		if (!BOOK_LIST.includes(book)) {
			throw new Error("Invalid Book in the cart...");
		}
	}
}
