import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  return (
    <div className="p-5 m-5 text-center">
      <h1 className="font-bold">Cart</h1>
      <button
        className="p-2 m-2 rounded-lg text-white bg-black cursor-pointer"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
