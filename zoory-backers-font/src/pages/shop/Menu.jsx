import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filterdItems, setFilterdItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  {
    /*start loading data*/
  }
  useEffect(() => {
    {
      /*start fetch data from the back end*/
    }
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        //console.log(data);
        setMenu(data);
        setFilterdItems(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };
    {
      /*end fetch data from the back end*/
    }
    //call the function
    fetchData();
  }, []);
  {
    /*end loading data*/
  }

  return (
    <div className="mt-10">
      {/*start menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className="flex flex-col items-center justify-center gap-8 py-48">
          {/*start text*/}
          <div className="px-4 text-center space-y-7">
            <h2 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
              Dive into Delight of Delectable{" "}
              <span className="text-[#FF9800]">Food</span>{" "}
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
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
      {/*end menu banner */}

      {/*start menu shop section */}
      <div className="section-container"></div>
      {/*end menu shop section */}
    </div>
  );
};

export default Menu;
