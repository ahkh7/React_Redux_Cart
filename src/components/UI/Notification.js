const Notification = (props) => {
   let specialClasses = '';

   if (props.status === 'error') {
      specialClasses = 'bg-red-300 ';
   }
   if (props.status === 'success') {
      specialClasses = 'bg-green-300 ';
   }
   const classes =
      'flex h-[3rem] w-full  items-center justify-between text-black py-2 px-[10%] text-white';
   return (
      <section className={`${classes} ${specialClasses}`}>
         <h2 className="text-base">{props.title}</h2>
         <p className="text-base">{props.message}</p>
      </section>
   );
};

export default Notification;
