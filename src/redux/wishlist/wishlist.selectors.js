import { createSelector } from "reselect";

const selectwishlist = (state) => state.wishlist;

export const selectwishlistItems = createSelector(
  [selectwishlist],
  (wishlist) => wishlist?.wishlistItems
);

export const selectwishlistHidden = createSelector(
  [selectwishlist],
  (wishlist) => wishlist?.hidden
);
export const selectwishlistItmesCount = createSelector(
  [selectwishlistItems],
  (wishlistItems) =>
    wishlistItems?.reduce(
      (accumalatedQuantity, wishlistItem) =>
        accumalatedQuantity + wishlistItem?.quantity,
      0
    )
);
export const selectwishlistTotal = createSelector(
  [selectwishlistItems],
  (wishlistItems) =>
    wishlistItems?.reduce(
      (accumalatedQuantity, wishlistItem) =>
        accumalatedQuantity + wishlistItem?.quantity * wishlistItem?.price,
      0
    )
);
