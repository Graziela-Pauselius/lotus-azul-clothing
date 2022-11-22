import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/Checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import "./Checkout.styles.scss";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="checkout-block">
					<span>Product</span>
				</div>
				<div className="checkout-block">
					<span>Description</span>
				</div>
				<div className="checkout-block">
					<span>Quantity</span>
				</div>
				<div className="checkout-block">
					<span>Price</span>
				</div>
				<div className="checkout-block">
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<span className="total">Total: ${cartTotal}</span>
			<PaymentForm />
		</div>
	);
};

export default Checkout;
