import React from "react";

const HomeAndOutdoor = () => {
  const categories = [
    {
      title: "Smart watches",
      price: "From USD 19",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MIyKrEGBKkgYJ2vx8nF_sKhVOy-bFg8zfw&s",
    },
    {
      title: "Soft chairs",
      price: "From USD 19",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlMh-VQdsdzvvOJQPDHiQEsFGI7_pM_doLg&s",
    },
    {
      title: "Kitchen utensils",
      price: "From USD 19",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29A-RhFcvTq7-f9z1pnnkOJm2Oy33mjG9Dg&s",
    },
    {
      title: "Blenders",
      price: "From USD 19",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3omwzSHdTYMQ31zMfA_Y79GSuFcGdNGzJg&s",
    },
    {
      title: "Home appliance",
      price: "From USD 19",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQZ6RDJtB7AiNYv5nMRU9kWRkGpW7pTVug&s",
    },
    {
      title: "Coffee maker",
      price: "From USD 19",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPhz6oCZkVre_-MLF9D7Sef_NFPaNlaRp4w&s",
    },
  ];

  return (
    <div className=" bg-white">
      {/* Mobile view */}
      <div className="xl:hidden">
        <h1 className="text-xl font-semibold p-2">Home and outdoor</h1>
        <div className="flex overflow-x-auto border divide-x px-4 border-gray-300 divide-gray-300">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[98px] h-[98px] rounded p-2"
              />
              <h2 className="text-sm font-medium">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view */}
      <div className="xl:flex hidden  ">
        <div className="relative">
          <img src="/Group 969.png" className="w-[280px] h-[257px]" alt="" />
          <div className="absolute top-0 p-4 flex flex-col justify-center gap-2">
            <h1 className="text-lg font-medium tracking-tighter">
              Home and <span>outdoor</span>
            </h1>
            <button className="px-4 py-2 tracking-tight text-sm bg-white shadow-sm rounded">
              Source now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4">
          {categories.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 w-[223px] h-[127px] flex justify-between items-center p-4"
            >
              <div>
                <h1 className="text-lg font-medium tracking-tighter">
                  {item.title}
                </h1>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-[67px] h-[69px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAndOutdoor;
