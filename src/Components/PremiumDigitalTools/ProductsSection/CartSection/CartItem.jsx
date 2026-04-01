import { MdDelete } from "react-icons/md";

export default function CartItem({ product, setSelectProduct }) {
  const handleRemoveProduct = () => {
    setSelectProduct((prev) => {
      const filteredData = prev.filter(({ id }) => product.id !== id);
      return filteredData;
    });
  };
  return (
    <li className="list-row border border-gray-300">
      <div>
        <img className="size-10 rounded-box" src={product.icon} />
      </div>
      <div>
        <div className="text-xl">{product.name}</div>
        <div className="text-md uppercase font-semibold opacity-60">
          ${product.price}
        </div>
      </div>
      <button
        onClick={handleRemoveProduct}
        className="btn rounded-full bg-red-200 text-red-500 font-extrabold">
        Remove
      </button>
    </li>
  );
}
