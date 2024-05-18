import React from "react";

const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      title: "Breakfast",
      des: "(86 dishes)",
      image: "../../../public/catagories/breakfirst.jpg",
    },
    {
      id: 2,
      title: "Lunch",
      des: "(15 dishes)",
      image: "../../../public/catagories/lunch.jpg",
    },
    {
      id: 3,
      title: "Dinner",
      des: "(18 dishes)",
      image: "../../../public/catagories/dinner.jpg",
    },
    {
      id: 4,
      title: "Deserts",
      des: "(20 dishes)",
      image: "../../../public/catagories/desserts.jpg",
    },
  ];

  return (
    <div className="py-16 section-container ">
      {/*start categories*/}
      <div className="text-center">
        <p className="subtitle">Customer Favorites </p>
        <h2 className="title">Popular Categories</h2>
      </div>
      {/*start categories card*/}
      <div className="flex flex-col flex-wrap items-center justify-around gap-8 mt-12 sm:flex-row">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="px-5 py-6 mx-auto text-center transition-all duration-300 bg-white rounded-md shadow-lg cursor-pointer w-72 hover:-translate-y-4"
          >
            <div className="flex items-center justify-center w-full mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="  bg-[#FF9800] p-5 rounded-full w-36 h-36 "
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      {/*end categories card*/}
      {/*end categories*/}
    </div>
  );
};

export default Categories;
