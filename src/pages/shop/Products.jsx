import React, { useState } from "react";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png"

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "New-Arrival", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <div className="px-12">
      <div className="max-w-screen-2x1 mx-auto">
        <h2 className="text-4xl font-bold text-center my-8 ">{headline}</h2>

        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-full md:max-w-2/4 mx-auto sm:rounded-full md-p-2.5 px-1 py-3 mb-16 whitespace-nowrap ">
          <div className="flex flex-col sm:flex-row items-center  md:justify-between justify-center gap-1.2 ">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 mx-auto rounded-full hover:bg-amber-500 hover:text-white transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? "bg-white text-amber-500"
                    : " text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          {/* products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-2x1 container ">
            {filteredProducts
              .slice(0, visibleProducts)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
          {/* load more button */}
          {visibleProducts < filteredProducts.length && (
            <div className="flex justify-center items-center mt-8">
              <button 
               onClick={loadMoreProducts}
              className="text-base font-semibold text-amber-500 flex items-center cursor-pointer">
                View All
                <img src={btnIcon} alt="btn icon" />
              </button>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
