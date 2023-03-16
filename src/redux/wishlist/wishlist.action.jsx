import { WishlistActionType } from "./wishlist.types";

export const toggleCartHidden = () => ({
  type: WishlistActionType.TOGGLE_WISHLIST_HIDDEN,
});

export const addItem = (item) => ({
  type: WishlistActionType.ADD_ITEM_WISHLIST,
  payload: item,
});

export const removeItem = (item) => ({
  type: WishlistActionType.REMOVE_ITEM_WISHLIST,
  payload: item,
});

export const clearItemFromWishlist = (item) => ({
  type: WishlistActionType.CLEAR_ITEM_FROM_WISHLIST,
  payload: item,
});
