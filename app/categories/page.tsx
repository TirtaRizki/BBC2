import React from "react";

const Categories = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2>Categories</h2>
        <p>Discover our curated collection of premium second-hand shoes</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button>All Brands</button>
        <button>New Arrivals</button>
        <button>Best Sellers</button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div>
          <div>
            {/* Icon */}
          </div>
          <div>
            <h3>100% Authentic</h3>
            <p>Guaranteed original brands</p>
          </div>
        </div>

        <div>
          <div>
            {/* Icon */}
          </div>
          <div>
            <h3>Secure Payment</h3>
            <p>Multiple payment options</p>
          </div>
        </div>

        <div>
          <div>
            {/* Icon */}
          </div>
          <div>
            <h3>Fast Delivery</h3>
            <p>Nationwide shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
