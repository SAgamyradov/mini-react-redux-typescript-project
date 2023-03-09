import { actionTypes } from "../Types/cartTypes";
import { IProduct } from "./../../interface/types";

export const AddToCart = (product: IProduct, count: number) => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: { product, count },
});

export const RemoveFromCart = (productId: string) => ({
  type: actionTypes.CART_REMOVE_ITEM,
  payload: productId,
});
