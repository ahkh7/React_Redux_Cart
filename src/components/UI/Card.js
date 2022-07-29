const Card = (props) => {
   return (
      <section
         className={`my-4 mx-auto w-[90%] max-w-[40rem] rounded-md p-4 ${
            props.className ? props.className : ''
         }`}
      >
         {props.children}
      </section>
   );
};

export default Card;
