import React from "react";
import expriencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";

const Expriences = () => {
  return (
    <section className="mx-12">
      <section className=" my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-6 max-w-screen-2x1 container mx-auto">
        <div className="md:w-1/2 md:h-[541px]">
          <img src={expriencesImg} alt="" className="h-full w-full" />
        </div>

        <div className="md:w-1/2">
          <h3 className=" uppercase text-lg font-semibold text-amber-500 mb-4">
            Experiences
          </h3>
          <h2 className=" capitalize text-4xl font-bold mb-4 md:w-1/2">
            we provide you the best experience
          </h2>
          <p className="mb-5 ">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <Button text="More Info" />
        </div>
      </section>
    </section>
  );
};

export default Expriences;
