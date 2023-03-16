import { connect } from "react-redux";
import { createStructuredSelector } from "reselect/es";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.componenet";
import {
  selectwishlistItems,
  selectwishlistTotal,
} from "../../redux/wishlist/wishlist.selectors";
import "./wishlist.style.scss";

export const Wishlist = ({ wishlistItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {wishlistItems &&
        wishlistItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} isWishlist={true} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectwishlistItems,
  total: selectwishlistTotal,
});
export default connect(mapStateToProps)(Wishlist);
