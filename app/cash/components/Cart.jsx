import Bottom from "./Cart/Bottom";
import Items from "./Cart/Items";

const Cart = () => {
  
  return (
    <div className="h-[100vh] flex flex-col">
      <Items/>
      <Bottom />
    </div>
  );
};

export default Cart;
