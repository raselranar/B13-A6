import GradientButton from "../UI/GradientButton";
import shoppingCart from "../../assets/products/shopping-cart.png";

export default function NavBar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 *:text-base rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="font-semibold leading-[120%]">Products</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Features</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Pricing</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">Testimonials</a>
              </li>
              <li>
                <a className="font-semibold leading-[120%]">FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DigiTools</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 *:text-base">
            <li>
              <a className="font-semibold leading-[120%]">Products</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Features</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Pricing</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">Testimonials</a>
            </li>
            <li>
              <a className="font-semibold leading-[120%]">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 ml-8">
          <a className="flex items-center gap-4">
            <img src={shoppingCart} alt="shopping-cart icon" />
            <span>Login</span>
          </a>
          <GradientButton text="Get Started" />
        </div>
      </div>
    </div>
  );
}
