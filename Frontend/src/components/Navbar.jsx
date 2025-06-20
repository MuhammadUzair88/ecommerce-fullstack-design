import { useState } from "react";
import {
  FaShoppingBag,
  FaUser,
  FaRegCommentDots,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleSearch = () => {
    const categoryParam =
      selectedCategory !== "All category" ? selectedCategory : "";
    navigate(
      `/products?search=${encodeURIComponent(
        searchQuery
      )}&category=${encodeURIComponent(categoryParam)}`
    );
  };

  return (
    <div className="bg-white shadow-md w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex flex-col">
        <div className="flex items-center justify-between p-4 px-8">
          {/* Brand */}
          <Link to={"/"}>
            <div className="flex items-center space-x-2">
              <FaShoppingBag className="text-[#8CB7F5] text-2xl" />
              <span className="text-[#8CB7F5] text-xl font-bold">Brand</span>
            </div>
          </Link>
          {/* Search Bar */}
          <div className="flex w-1/2 border border-blue-500 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 outline-none"
            />
            <select
              className="px-3 border-l border-blue-500 outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Men Clothing">Men Clothing</option>
              <option value="Women Clothing">Women Clothing</option>
              <option value="Kids Clothing">Kids Clothing</option>
              <option value="Shoes">Shoes</option>
              <option value="Accessories">Accessories</option>
              <option value="Watches">Watches</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Laptops">Laptops</option>
              <option value="Tablets">Tablets</option>
              <option value="Cameras">Cameras</option>
              <option value="Smartwatches">Smartwatches</option>
              <option value="Headphones">Headphones</option>
              <option value="Furniture">Furniture</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Lighting">Lighting</option>
              <option value="Cookware">Cookware</option>
              <option value="Appliances">Appliances</option>
              <option value="Bedding">Bedding</option>
              <option value="Skincare">Skincare</option>
              <option value="Haircare">Haircare</option>
              <option value="Makeup">Makeup</option>
              <option value="Fragrances">Fragrances</option>
              <option value="Bath & Body">Bath & Body</option>
              <option value="Sportswear">Sportswear</option>
              <option value="Fitness Equipment">Fitness Equipment</option>
              <option value="Outdoor Gear">Outdoor Gear</option>
              <option value="Toys">Toys</option>
              <option value="Baby Care">Baby Care</option>
              <option value="School Supplies">School Supplies</option>
              <option value="Snacks">Snacks</option>
              <option value="Beverages">Beverages</option>
              <option value="Dairy Products">Dairy Products</option>
              <option value="Packaged Foods">Packaged Foods</option>
              <option value="Pet Food">Pet Food</option>
              <option value="Pet Accessories">Pet Accessories</option>
              <option value="Books">Books</option>
              <option value="Stationery">Stationery</option>
              <option value="Gifts">Gifts</option>
            </select>
            <button
              className="bg-blue-500 text-white px-4 py-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-600 text-sm">
            {userInfo ? (
              <div
                onClick={() => navigate("/profile")}
                className="flex flex-col items-center cursor-pointer"
              >
                <FaUser className="text-xl" />
                <span>Profile</span>
              </div>
            ) : (
              <div
                onClick={() => navigate("/login")}
                className="flex flex-col items-center cursor-pointer"
              >
                <FaUser className="text-xl" />
                <span>Login</span>
              </div>
            )}
            <div className="flex flex-col items-center cursor-pointer">
              <FaRegCommentDots className="text-xl" />
              <span>Messages</span>
            </div>
            <Link to={"/orderlist"}>
              <div className="flex flex-col items-center cursor-pointer">
                <FaHeart className="text-xl" />
                <span>Orders</span>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="relative flex flex-col items-center cursor-pointer">
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                    {totalItems}
                  </span>
                )}
                <FaShoppingCart className="text-xl" />
                <span>Cart</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="border-t border-[#E0E0E0] p-4 px-14 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <h1 className="flex items-center gap-2">
              <IoMenuSharp /> All Categories
            </h1>
            <h1>Hot Offers</h1>
            <h1>Gift Boxes</h1>
            <h1>Projects</h1>
            <h1>Menu Item</h1>
            <div>
              <label htmlFor="help">Help</label>
              <select name="help" id="help" className="ml-2 outline-none" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label>English, USD</label>
              <select className="outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2">
                Ship to
                <img
                  className="w-6 h-4 object-cover"
                  src="https://flagcdn.com/w320/us.png"
                  alt="flag"
                />
              </label>
              <select className="outline-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex flex-col gap-3">
        {/* Top Bar */}
        <div className="px-6 py-4 flex justify-between items-center shadow-md">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <IoMenuSharp className="text-2xl" />
            </button>
            <Link to={"/"}>
              <div className="flex items-center gap-2">
                <FaShoppingBag className="text-[#8CB7F5] text-3xl" />
                <span className="text-[#8CB7F5] text-2xl font-bold">Brand</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4 relative">
            <Link to={"/cart"}>
              <div className="relative">
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                    {totalItems}
                  </span>
                )}
                <FaShoppingCart className="text-2xl" />
              </div>
            </Link>
            {userInfo ? (
              <FaUser
                className="text-2xl cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            ) : (
              <FaUser
                className="text-2xl cursor-pointer"
                onClick={() => navigate("/login")}
              />
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative px-5">
          <FaSearch className="absolute top-3 left-7 text-gray-400 text-lg" />
          <input
            className="w-full h-10 bg-gray-100 border border-gray-300 rounded-xl pl-10 pr-4 text-lg"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Category Buttons */}
        <div className="px-4 py-2 flex items-center flex-wrap gap-2">
          {[
            "All category",
            "Gadgets",
            "Clothes",
            "Accessories",
            "Electronics",
            "Books",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                navigate(`/products?category=${encodeURIComponent(cat)}`);
              }}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slide-out Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <ImCross className="text-xl text-gray-600" />
              </button>
            </div>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-center gap-2">
                <FaRegCommentDots />
                Messages
              </li>
              <li className="flex items-center gap-2">
                <FaHeart />
                Orders
              </li>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  userInfo ? navigate("/profile") : navigate("/login")
                }
              >
                <FaUser />
                {userInfo ? "Profile" : "Login"}
              </li>
              <li className="flex items-center gap-2">
                <FaShoppingCart />
                Cart
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
