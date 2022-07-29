import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

const CartButton = () => {
   const dispatch = useDispatch();
   const cartQuantity = useSelector((state) => state.cart.totalQuantity);

   const toggleCartHandler = () => {
      dispatch(uiActions.toggle());
   };

   return (
      <button
         className="rounded-md border border-[#1ad1b9] bg-transparent p-2 text-[#1ad1b9]  hover:text-white  active:text-white "
         onClick={toggleCartHandler}
      >
         <span className="m-4">My Cart</span>
         <span className="rounded-2xl bg-[#1ad1b9] py-1 px-4 text-black">
            {cartQuantity}
         </span>
      </button>
   );
};

export default CartButton;
