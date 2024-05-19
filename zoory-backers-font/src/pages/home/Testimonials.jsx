import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      {/*start testimonials*/}
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        {/*start image*/}
        <div className="md:w-1/2">
          <img src="/public/logo.png" alt="logo" />
        </div>
        {/*end image*/}
        {/*start discription*/}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us.</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              “I had the pleasure of dining at Zoory last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>

            {/*start desiui avator*/}
            <div className="flex flex-wrap items-center gap-4 ">
              <div className="-space-x-6 avatar-group rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.icons8.com/emoji/48/man-blond-hair.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.icons8.com/emoji/48/man-with-mustache-medium-dark-skin-tone.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.icons8.com/emoji/48/man-with-mustache-medium-dark-skin-tone.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">5.9 </span>{" "}
                  <span className="text-[#807E7E]">(18.6k Reviews)</span>
                </div>
              </div>
            </div>

            {/*end desiui avator*/}
          </div>
        </div>
        {/*end discription*/}
      </div>
      {/*start testimonials*/}
    </div>
  );
};

export default Testimonials;
