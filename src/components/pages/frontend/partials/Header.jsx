import { Menu, Search, ShoppingBasket } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(scrollY));
    return window.removeEventListener("scroll", () =>
      setScrollPosition(scrollY)
    );
  }, []);

  return (
    <header
      className={`${
        scrollPosition > 150 ? "bg-white" : "bg-transparent text-black"
      } fixed w-full top-0 left-0 bg-transparent z-50 md:hover:bg-white transition-all ${
        isOpen ? "bg-white" : "bg-transparent !text-white"
      }`}
    >
      <div className="container">
        <div
          className={`${
            scrollPosition > 150 ? "!text-black" : ""
          } flex justify-between items-center py-4 md:hover:text-black`}
        >
          <button
            className={`${isOpen ? "active" : ""} menu-btn md:hidden `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`${scrollPosition === 0 ? "bg-white" : "bg-black"} ${
                isOpen && "!bg-black"
              }`}
            ></span>
            <span
              className={`${scrollPosition === 0 ? "bg-white" : "bg-black"} ${
                isOpen && "!bg-black"
              }`}
            ></span>
            <span
              className={`${scrollPosition === 0 ? "bg-white" : "bg-black"} ${
                isOpen && "!bg-black"
              }`}
            ></span>
          </button>

          <Link to="/" className="text-xl uppercase font-bold">
            Zanerobe
          </Link>

          <nav
            className={`fixed md:static w-full h-screen md:h-auto top-[90px] left-0 bg-white md:bg-transparent md:w-auto z-10 ${
              isOpen ? "text-black block" : "hidden md:block"
            }`}
          >
            <ul className="flex gap-5 main-nav flex-col md:flex-row translate-x-[50px] md:translate-x-0 translate-y-[50px] md:translate-y-0 w-[75%] md:w-auto">
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/brand">Brand</NavLink>
              </li>
              <li>
                <NavLink to="/loyalty">Loyalty</NavLink>
              </li>
              <li>
                <NavLink to="/saved-items">Saved Items</NavLink>
              </li>
              <li>
                <NavLink to="/coming-soon">Coming Soon</NavLink>
              </li>
            </ul>

            <Link
              to="/"
              className="md:hidden py-4 border-y border-black translate-x-[50px] block translate-y-[90px] w-[75%]"
            >
              Account
            </Link>
          </nav>

          <ul className="flex gap-5  group-hover:text-black">
            <li className="hidden md:block">
              <Link to="/admin/login">Account</Link>
            </li>
            <li>
              <button>
                <Search strokeWidth={1} />
              </button>
            </li>
            <li>
              <Link to="/admin/dashboard">
                <button>
                  <ShoppingBasket strokeWidth={1} />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
