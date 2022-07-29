import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = () => {
   const cartItems = useSelector((state) => state.cart.items);

   return (
      <Card className="max-w-[30rem] bg-gray-800 text-white">
         <h2 className="my-4 text-2xl ">Cart Items</h2>
         <ul className="m-0 list-none p-0">
            {cartItems.map((item) => (
               <CartItem
                  key={item.id}
                  item={{
                     id: item.id,
                     title: item.name,
                     quantity: item.quantity,
                     total: item.totalPrice,
                     price: item.price
                  }}
               />
            ))}
         </ul>
      </Card>
   );
};

export default Cart;
