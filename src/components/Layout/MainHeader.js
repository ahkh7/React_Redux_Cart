import CartButton from '../Cart/CartButton';

const MainHeader = () => {
   return (
      <header className="flex h-20 w-full items-center justify-between bg-slate-900 px-[10%]">
         <h1 className="text-white">React_Redux_Cart</h1>
         <nav>
            <ul className="">
               <li>
                  <CartButton />
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainHeader;
