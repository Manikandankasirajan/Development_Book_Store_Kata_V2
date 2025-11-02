const DISCOUNT_RULES = { 1: 0, 2: 5 };

export default function calculateDiscountPrice(bookQuantity, actualPrice) {
	const discountPrice = actualPrice * (DISCOUNT_RULES[bookQuantity] / 100);
	return discountPrice;
}
