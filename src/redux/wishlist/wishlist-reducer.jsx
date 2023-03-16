import { WishlistActionType } from "./wishlist.types";
import { addItemToWishlist, removeItemFromWishlist } from "./wishlist.utils";

const INITIAL_STATE = {
  hidden: true,
  wishlistItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionType.TOGGLE_WISHLIST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case WishlistActionType.ADD_ITEM_WISHLIST:
      return {
        ...state,
        wishlistItems: addItemToWishlist(state.wishlistItems, action.payload),
      };
    case WishlistActionType.CLEAR_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (wishlistItem) => wishlistItem.id !== action.payload.id
        ),
      };

    case WishlistActionType.REMOVE_ITEM_WISHLIST:
      return {
        ...state,
        wishlistItems: removeItemFromWishlist(
          state.wishlistItems,
          action.payload
        ),
      };
    default:
      return state;
  }
};
export default wishlistReducer;
