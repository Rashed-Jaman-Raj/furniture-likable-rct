import React from "react";
import Button from "../../components/Button";

const WhyChoose = () => {
  return (
    <div>
      <section className="section-container">
        <div className="my-24 ml-15 mr-15 grid grid-cols-1 lg:grid-cols-4">
          <div>
            <h2 className="text-4xl font-bold ">
              Why <br /> Choosing Us
            </h2>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
            <p className="text-base mb-2">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Button text="More info" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Affordable prices</h3>
            <p className="text-base mb-2">
              The prices is hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Button text="More info" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Many choices</h3>
            <p className="text-base mb-2">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Button text="More info" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
