import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';

const ProductItem = (props) => {
   const dispatch = useDispatch();

   const { title, price, description, id } = props;

   const addToCartHandler = () => {
      dispatch(
         cartActions.addItemToCart({
            id,
            title,
            price
         })
      );
   };

   return (
      <li>
         <Card className="bg-teal-800 text-white">
            <header className="flex items-baseline justify-between">
               <h3 className="my-2 text-xl font-bold">{title}</h3>
               <div className="rounded-3xl bg-slate-500 py-1 px-6 text-xl ">
                  ${price.toFixed(2)}
               </div>
            </header>
            <p className="text-gray-300">{description}</p>
            <div className="flex justify-end">
               <button
                  onClick={addToCartHandler}
                  className="rounded-xl border border-white py-2 px-4 hover:bg-green-900 hover:text-white active:bg-slate-700 active:text-white "
               >
                  Add to Cart
               </button>
            </div>
         </Card>
      </li>
   );
};

export default ProductItem;
