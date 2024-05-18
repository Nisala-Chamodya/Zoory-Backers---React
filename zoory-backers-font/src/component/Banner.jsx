import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className="flex flex-col items-center justify-between gap-8 py-24 md:flex-row-reverse">
          {/*start banner image*/}
          <div className="md:w-1/2">
            <img
              src="/public/bannerberger.jpg"
              alt="bannerberger"
              className="w-auto h-[530px] rounded-[100%] mt-[25px] "
            />
            {/*end banner image*/}
            {/*start rating images */}
            <div className="flex flex-col md:flex-row items-center justify-around -mt-14 -ml-[100px] gap-20">
              {/*start first rating div*/}
              <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-[380px] ">
                <img
                  src="/public/bannerpizza.jpg"
                  alt="bannerpizza.jpg"
                  className="w-auto h-[100px] rounded-2xl"
                />
                {/*start first rating details*/}
                <div className="space-y-1">
                  <h5 className="mb-1 font-medium">Special Chicken Pizza </h5>
                  {/*start rating stars*/}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      checked
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                  </div>
                  {/*end rating stars*/}
                  <p className="text-red">R.s. 1500.00</p>
                </div>
                {/*end first rating details*/}
              </div>
              {/*end first rating div*/}

              {/*start second rating div*/}
              <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-[380px] ">
                <img
                  src="/public/bannerhotdog.jpg"
                  alt="bannerhotdog.jpg"
                  className="w-auto h-[100px] rounded-2xl"
                />
                {/*start first rating details*/}
                <div className="space-y-1">
                  <h5 className="mb-1 font-medium">Special Hot Dog </h5>
                  {/*start rating stars*/}
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      checked
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      readOnly
                    />
                  </div>
                  {/*end rating stars*/}
                  <p className="text-red">R.s. 500.00</p>
                </div>
                {/*end first rating details*/}
              </div>
              {/*end second rating div*/}
            </div>
            {/*end rating images */}
          </div>
          {/*start text*/}
          <div className="px-4 md:w-1/2 space-y-7">
            <h2 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
              Dive into Delight of Delectable{" "}
              <span className="text-[#FF9800]">Food</span>{" "}
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Where Each Plate Waves a Story Of Culinary Mastery And Passionate
              Craftsmanship
            </p>
            <button className="btn bg-[#FF9800] px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
          {/*end text*/}
        </div>
      </div>
    </div>
  );
};

export default Banner;
