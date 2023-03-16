import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect, useDispatch } from "react-redux";
import { addItem as addToCart } from "../../redux/cart/cart.action";
import "./collection-item.style.scss";
import logo from "./images/shop-img/hats/brown-cowboy.png";
import { addItem as addToWishlist } from "../../redux/wishlist/wishlist.action";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button
        onClick={() => {
          dispatch(addToWishlist(item));
        }}
        style={{ position: "absolute", bottom: 150 }}
      >
        Add to Wishlist
      </button>

      <CustomButton
        onClick={() => {
          dispatch(addToCart(item));
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addCart: (item) => ,
//   addWishlist: (item) => ,
// });
export default CollectionItem;
