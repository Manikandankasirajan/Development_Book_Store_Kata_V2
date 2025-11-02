const BOOK_PRICE = 50;
export default function calculatePrice(bookQuantity) {
	const price = bookQuantity * BOOK_PRICE;
	return price;
}
