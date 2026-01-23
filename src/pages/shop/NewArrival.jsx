
import React, { useState } from "react";
import detailBannerImg from "../../assets/about.png";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";

const NewArrival = ({ headline }) => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  // Filter only New Arrival products
  const filteredProducts = products.filter(
    (product) => product.category === "New-Arrival",
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className=" min-h-screen max-w-screen-2x1 mx-auto">
      <div>
        <div
          className=" w-full  h-100 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `Url(${detailBannerImg})` }}
        ></div>

        <h2 className=" px-12 text-3xl items-center mt-20 justify-center text-center ml-10 mr-10 font-semibold mb-4 border-b border-gray-300 ">
          {" "}
          Explore Our Latest Collection
        </h2>

        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

        {/* products grid */}
        <div className="px-12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-2x1 container">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* load more button */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8 mx-12">
            <button
              onClick={loadMoreProducts}
              className="text-base font-semibold text-amber-500 flex items-center cursor-pointer"
            >
              View All
              <img src={btnIcon} alt="btn icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
