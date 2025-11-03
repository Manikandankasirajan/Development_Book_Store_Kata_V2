import calculateDiscountPrice from "./calculateDiscountPrice";

const BOOK_PRICE = 50;

export default function calculatePrice(bookQuantity) {
	const actualPrice = bookQuantity * BOOK_PRICE;
	const discountPrice = calculateDiscountPrice(bookQuantity, actualPrice);
	const priceAfterDiscount = actualPrice - discountPrice;
	return Math.floor(priceAfterDiscount);
}
