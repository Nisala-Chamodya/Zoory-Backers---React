import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../component/Cards";

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
        const response = await fetch("http://localhost:6001/menu");
        const data = await response.json();
        // console.log(data)
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

  {
    /*start filtering data based on category*/
  }
  const filterItems = (category) => {
    const fillterd =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilterdItems(fillterd);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  {
    /*start show all data*/
  }
  const showAll = () => {
    setFilterdItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };
  {
    /*end show all data*/
  }

  {
    /*start sorting based on A-Z , Z-A, Low-High pricing*/
  }
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filterdItems];

    //logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterdItems(sortedItems);
    setCurrentPage(1);
  };
  {
    /*end sorting based on A-Z , Z-A, Low-High pricing*/
  }

  {
    /*end filtering data based on category*/
  }

  //pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterdItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-10">
      {/*start Menu Banner*/}
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
      {/*End Menu Banner*/}

      {/*start menu shop section*/}
      <div className="section-container">
        {/*start filtering and sorting*/}
        <div className="flex flex-col flex-wrap items-center mb-8 space-y-3 md:flex-row md:justify-between">
          <div className="flex flex-row flex-wrap justify-start gap-4 md:items-center md:gap-8">
            {/*all categories btns*/}
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("bun")}
              className={selectedCategory === "bun" ? "active" : ""}
            >
              Buns
            </button>
            <button
              onClick={() => filterItems("rice")}
              className={selectedCategory === "rice" ? "active" : ""}
            >
              Rise
            </button>
            <button
              onClick={() => filterItems("kotthu")}
              className={selectedCategory === "kotthu" ? "active" : ""}
            >
              kotthu
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              pizza
            </button>
            <button
              onClick={() => filterItems("deserts")}
              className={selectedCategory === "deserts" ? "active" : ""}
            >
              Deserts
            </button>
          </div>

          {/*start sorting base filtering*/}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="p-2 bg-black ">
              <FaFilter className="w-4 h-4 text-white" />
            </div>

            {/*start sorting option button*/}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="px-2 py-1 text-white bg-black rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            {/*end sorting option button*/}
          </div>
          {/* end sorting base filtering*/}
        </div>
        {/*end filtering and sorting*/}

        {/*start product cards*/}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
          {
            currentItems.map((item, id) => (
              <Cards key={id} item={item} />
            ))
            /*{
                        currentItems.map((item) =>(
                            <Cards key={item._id} item={item}/>
                        ))
                    } */
          }
        </div>
        {/*end product cards*/}
      </div>
      {/*end menu shop section*/}

      {/*start pagination section*/}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filterdItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-[#FF9800] text-white"
                : "bg-gray-200"
            }`}
          >
            {" "}
            {index + 1}{" "}
          </button>
        ))}
      </div>
      {/*end pagination section*/}
    </div>
  );
};

export default Menu;
