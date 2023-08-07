import { AnyAction } from "redux";

import { setIsCartOpen, setCartItems } from "../../store/cart/cart.action";

import { cartItem } from "./cart.type";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: cartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }
  return state;
};
