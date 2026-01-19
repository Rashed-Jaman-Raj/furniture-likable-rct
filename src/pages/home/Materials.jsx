import React from "react";
import expriencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";
import materialsImg1 from "../../assets/material1.png";
import materialsImg2 from "../../assets/material2.png";
import materialsImg3 from "../../assets/material3.png";


const Materials = () => {
  return (
    <section className="mx-12">
      <div className=" my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-6 max-w-screen-2x1 container mx-auto">
        <div className="md:w-1/2">
          <h3 className=" uppercase text-lg font-semibold text-amber-500 mb-4">
            Materials
          </h3>
          <h2 className=" capitalize text-4xl font-bold mb-4 lg:w-1/2">
            Very serious materials for making furniture
          </h2>
          <p className="mb-5">
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
          </p>
          <Button text="More Info" />
        </div>

        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
          <div>
            <img src={materialsImg1} alt="" />
            <img src={materialsImg2} alt="" />
          </div>

          <div className=" md:col-span-2 col-span-1">
            <img src={materialsImg3} alt="" className=" w-full md:h-[451px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Materials;
