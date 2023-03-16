//this function is to check if we have any new item
export const addItemToWishlist = (wishlistItems, wishlistItemToAdd) => {
  const existingwishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToAdd.id
  );
  //if any item alredy in carItem array then we only increase qunatity of item and retrun
  if (existingwishlistItem) {
    return wishlistItems.map((wishlistItem) =>
      wishlistItem.id === wishlistItemToAdd.id
        ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
        : wishlistItem
    );
  }
  //we retrun if  we have any new item
  return [...wishlistItems, { ...wishlistItemToAdd, quantity: 1 }];
};

export const removeItemFromWishlist = (wishlistItems, wishlistItemToRemove) => {
  const existingwishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToRemove.id
  );
  if (existingwishlistItem.quantity === 1) {
    return wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id
    );
  }

  return wishlistItems.map((wishlistItem) =>
    wishlistItem.id === wishlistItemToRemove.id
      ? { ...wishlistItem, quantity: wishlistItem.quantity - 1 }
      : wishlistItem
  );
};
