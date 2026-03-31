import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

export default function CartSection({ selectProduct }) {
  return (
    <div className="">
      <h2 className="font-bold text-2xl/[33px]">Your Cart</h2>
      {/* Cart List */}
      {selectProduct.length === 0 ? (
        <EmptyCart />
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md mt-6 gap-4">
          {selectProduct.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
