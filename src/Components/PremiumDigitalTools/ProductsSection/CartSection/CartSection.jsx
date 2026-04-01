import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

export default function CartSection({ selectProduct, setSelectProduct }) {
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-2xl/[33px]">Your Cart</h2>
      {/* Cart List */}
      {selectProduct.length === 0 ? (
        <EmptyCart />
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md mt-6 gap-4">
          {selectProduct.map((product) => (
            <CartItem
              setSelectProduct={setSelectProduct}
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      )}
      <div className="">
        <p className="text-gray-400">Total:</p>
        <p></p>
      </div>
    </div>
  );
}
