const DISCOUNT_RULES = { 1: 0, 2: 5, 3: 10, 4: 20, 5: 25 };

export default function calculateDiscountPrice(bookQuantity, actualPrice) {
	const discountPrice = actualPrice * (DISCOUNT_RULES[bookQuantity] / 100);
	return discountPrice;
}
