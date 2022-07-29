import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
   {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first book I ever wrote'
   },
   {
      id: 'p2',
      price: 5,
      title: 'My Second Book',
      description: 'The second book I ever wrote'
   }
];

const Products = () => {
   return (
      <section className="">
         <h2 className="mx-auto mt-16 mb-6 text-center text-2xl font-bold uppercase">
            Buy your favorite products
         </h2>
         <ul className="m-0 list-none p-0">
            {DUMMY_PRODUCTS.map((product) => (
               <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
               />
            ))}
         </ul>
      </section>
   );
};

export default Products;
