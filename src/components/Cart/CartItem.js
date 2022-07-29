import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
   const dispatch = useDispatch();

   const { title, quantity, total, price, id } = props.item;

   const removeItemHandler = () => {
      dispatch(cartActions.removeItemFromCart(id));
   };

   const addItemHandler = () => {
      dispatch(
         cartActions.addItemToCart({
            id,
            title,
            price
         })
      );
   };

   const btnClasses =
      'bg-transparent border border-white ml-2 py-1 px-4 text-white hover:bg-slate-700 hover:text-white active:bg-slate-700 active:text-white ';

   return (
      <li className="my-4 rounded-md bg-slate-500 p-4">
         <header className="flex items-baseline justify-between">
            <h3 className="text-3xl">{title}</h3>
            <div className="text-2xl font-bold">
               ${total.toFixed(2)}{' '}
               <span className="text-base italic">
                  (${price.toFixed(2)}/item)
               </span>
            </div>
         </header>
         <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
               x <span>{quantity}</span>
            </div>
            <div className="my-2 flex justify-end">
               <button onClick={removeItemHandler} className={btnClasses}>
                  -
               </button>
               <button onClick={addItemHandler} className={btnClasses}>
                  +
               </button>
            </div>
         </div>
      </li>
   );
};

export default CartItem;
