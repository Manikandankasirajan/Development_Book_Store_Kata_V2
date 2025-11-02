import customCheckoutRule from "./checkoutRules/customCheckoutRule";
import defaultCheckoutRule from "./checkoutRules/defaultCheckoutRule";
import hasDuplicates from "./utils/hasDuplicates";
import validateCartForInvalidBook from "./utils/validateCartForInvalidBook";

export default function bookStore(cart) {
	if (cart.length === 0) {
		throw new Error("The Cart is Empty...");
	}

	validateCartForInvalidBook(cart);

	if (hasDuplicates(cart)) {
		return customCheckoutRule(cart);
	} else {
		return defaultCheckoutRule(cart);
	}
}
