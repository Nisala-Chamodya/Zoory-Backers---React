import React from "react";
const serviceList = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentations",
    image: "\\public\\images\\home\\service\\icon1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "We deliver your order promptly to your door",
    image: "\\public\\images\\home\\service\\icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering ",
    image: "\\public\\images\\home\\service\\icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    image: "\\public\\images\\home\\service\\icon4.png",
  },
];

const OurServices = () => {
  return (
    <div className="my-16 section-container">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        {/*start discription*/}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story And Service</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <button className="btn bg-[#FF9800] text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        {/*end discription*/}

        {/*start cards*/}
        <div className="md:w-1/2">
          <div className="grid items-center grid-cols-1 gap-8 sm:grid-cols-2">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className="px-4 py-5 space-y-2 text-center text-green-500 transition-all duration-200 rounded-sm shadow-md cursor-pointer hover:border-indigo-600 hover:border"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto"
                />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
        {/*end cards*/}
      </div>
    </div>
  );
};

export default OurServices;
