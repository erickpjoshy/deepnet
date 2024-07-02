import React, { useEffect, useState } from 'react';
import axios from '../../utilities/customAxios.js';
import './menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const result = await axios.get('/category');
    setCategories(result.data);
  };

  //   ---------start get drinks-------------------------
  const [drinks, setDrinks] = useState([]);
  const getDrinks = async () => {
    const result = await axios.get(`/item/6683f365ef1445b7ac00b49a`);
    setDrinks(result.data);
  };
  const splitDrinks = drinks => {
    const half = Math.ceil(drinks.length / 2);
    return [drinks.slice(0, half), drinks.slice(half)];
  };
  const [column1Drinks, column2Drinks] = splitDrinks(drinks);
  //   ---------end get drinks-------------------------

  //   ---------start get cocktails-------------------------
  const [cocktails, setCocktails] = useState([]);
  const getCocktails = async () => {
    const result = await axios.get(`/item/6683f3b3ef1445b7ac00b49c`);
    setCocktails(result.data);
  };
  const splitcocktails = cocktails => {
    const half = Math.ceil(cocktails.length / 2);
    return [cocktails.slice(0, half), cocktails.slice(half)];
  };
  const [column1cocktails, column2cocktails] = splitcocktails(cocktails);
  //   ---------end get cocktails-------------------------

  //   ---------start get falvors-------------------------
  const [flavors, setflavors] = useState([]);
  const getflavors = async () => {
    const result = await axios.get(`/item/6683f3cdef1445b7ac00b49e`);
    setflavors(result.data);
  };
  //   ---------end get falvors-------------------------
  useEffect(() => {
    getCategories();
    getDrinks();
    getCocktails();
    getflavors();
  }, []);
  console.log(drinks);
  return (
    <div className="">
      <div className="sliderimage relative ">
        <div className="imagesl">
          <img src="banner2.png" className="w-full h-full object-cover" />
        </div>
        <div className="bg-primary top-0 absolute w-full h-full">
          <div className="flex items-center justify-center h-full flex-col">
            <h1
              className="text-center text-white text-4xl sm:text-7xl font-extrabold"
              style={{ wordSpacing: '20px' }}
            >
              MENU
            </h1>
            <div className="container mt-4">
              <p className="text-white text-lg sm:text-2xl text-center">
                Please take a look at our menu featuring food, drinks, and
                brunch. If you'd like to place an order, use the "Order Online"
                button located below the menu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a
            className="bg-black w-[160px] border-sky-500 px-4 py-4 text-white text-center"
            href="#cocktails"
          >
            COCKTAILS
          </a>
          <a
            className="bg-blue-600 w-[160px] border-sky-500 px-4 py-4 text-white text-center"
            href="#drinks"
          >
            DRINKS
          </a>
          <a
            className="bg-black w-[160px] border-sky-500 px-4 py-4 text-white text-center"
            href="#hookah"
          >
            HOOKAH
          </a>
        </div>
      </div>
      {/* ------------------items-------------------- */}
      <div className="mt-16">
        <div id="drinks" className="relative" style={{ height: '100%' }}>
          <div className="pt-16" style={{ backgroundColor: '#0f0f0fe8' }}>
            <div className="container mx-auto mt-6 sm:mt-20">
              <div className="section1 mx-2 sm:mx-16">
                <h1 className="text-white  text-2xl sm:text-5xl font-semibold mt-4 sm:mt-16 text-center">
                  {categories[0]?.name}
                </h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 mx-6 gap-4">
                  <div>
                    {column1Drinks.map((item, i) => {
                      return (
                        <div className="my-4">
                          <div className="flex">
                            <span
                              className="line-clamp-1"
                              style={{ width: '86%', overflow: 'hidden' }}
                            >
                              <h2 className="text-white text-[26px] font-medium">
                                {item?.name}
                              </h2>
                            </span>
                            <span>
                              <h2 className="text-white text-2xl font-semibold">
                                $ {item?.price}
                              </h2>
                            </span>
                          </div>
                          <p className="text-white text-lg opacity-75 line-clamp-1 menu-dec">
                            {item?.varients}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {column2Drinks.map((item, i) => {
                      return (
                        <div className="my-4">
                          <div className="flex">
                            <span
                              className="line-clamp-1"
                              style={{ width: '86%', overflow: 'hidden' }}
                            >
                              <h2 className="text-white text-[26px] font-medium">
                                {item?.name}
                              </h2>
                            </span>
                            <span>
                              <h2 className="text-white text-2xl font-semibold">
                                $ {item?.price}
                              </h2>
                            </span>
                          </div>
                          <p className="text-white text-lg opacity-75 line-clamp-1 menu-dec">
                            {item?.varients}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  top-16 sm:top-0 w-full">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <div className="w-24 sm:w-64 z-30">
                  <img src="glass.png" className="h-full w-full" />
                </div>
                <div className="w-24 sm:w-56 z-30">
                  <img src="cocktail.png" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------section-2------------ */}
        <div id="cocktails" className="relative" style={{ height: '100%' }}>
          <div
            className="pt-1"
            style={{ backgroundColor: '#0f0f0fe8', paddingBottom: '40px' }}
          >
            <div className="container mx-auto mt-6 sm:mt-20">
              <div className="section1 mx-2 sm:mx-16">
                <h1 className="text-white  text-2xl sm:text-5xl font-semibold mt-4 sm:mt-16 text-center">
                  {categories[1]?.name}
                </h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 mx-6 gap-4">
                  <div>
                    {column1cocktails.map((item, i) => {
                      return (
                        <div className="my-4">
                          <div className="flex">
                            <span
                              className="line-clamp-1"
                              style={{ width: '86%', overflow: 'hidden' }}
                            >
                              <h2 className="text-white text-[26px] font-medium">
                                {item?.name}
                              </h2>
                            </span>
                            <span>
                              <h2 className="text-white text-2xl font-semibold">
                                $ {item?.price}
                              </h2>
                            </span>
                          </div>
                          <p className="text-white text-lg opacity-75 line-clamp-1 menu-dec">
                            {item?.varients}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {column2cocktails.map((item, i) => {
                      return (
                        <div className="my-4">
                          <div className="flex">
                            <span
                              className="line-clamp-1"
                              style={{ width: '86%', overflow: 'hidden' }}
                            >
                              <h2 className="text-white text-[26px] font-medium">
                                {item?.name}
                              </h2>
                            </span>
                            <span>
                              <h2 className="text-white text-2xl font-semibold">
                                $ {item?.price}
                              </h2>
                            </span>
                          </div>
                          <p className="text-white text-lg opacity-75 line-clamp-1 menu-dec">
                            {item?.varients}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full top-0 sm:-top-32">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <div className="w-24 sm:w-48 z-30">
                  <img src="juiceglass.png" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-0 sm:right-36 sm:-bottom-0">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <div className="w-24 sm:w-48 z-30">
                  <img src="lemglass.png" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------section-3------------ */}
        <div id="hookah" className="relative" style={{ height: '100%' }}>
          <div
            className="pt-1"
            style={{ backgroundColor: '#0f0f0fe8', paddingBottom: '40px' }}
          >
            <div className="container mx-auto mt-6 sm:mt-20">
              <div className="section1 mx-2 sm:mx-16">
                <h1 className="text-white  text-2xl sm:text-5xl font-semibold mt-4 sm:mt-16 text-center">
                  {categories[2]?.name}
                </h1>
                <div className="flex mt-10 mx-6 gap-4 justify-between flex-wrap">
                  {flavors.map((item, i) => {
                    return (
                      <h2 className="text-white text-[26px] font-medium">
                        {item.name}
                      </h2>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------button------------------------ */}

      <div style={{ backgroundColor: '#0f0f0fe8' }}>
        <div className="container mx-auto pb-8">
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-4 mb-12 cursor-pointer">
              ORDER ONLINE
            </button>
          </div>
          <div
            className="grid sm:grid-cols-3  gap-3 px-4 py-2 text-white items-center mb-8"
            style={{ backgroundColor: '#C5A059' }}
          >
            <p
              className="bclass bottom-desc"
              style={{ borderRight: '1px solid #fff' }}
            >
              Food may not be refunded. If your food was made incorrectly we
              will remake it for you.
            </p>
            <p
              className="bclass bottom-desc"
              style={{ borderRight: '1px solid #fff' }}
            >
              18% service charge will be added to all checks over $100.
            </p>
            <p className="bottom-desc">
              Consuming raw or undercooked meats, poultry, seafood, shellfish or
              eggs may increase your risk of foodborne illness
            </p>
          </div>
        </div>
      </div>
      {/* -------------FOOTER---------------------- */}
      <div className="footer bg-black pb-8 pt-28">
        <div className="container mx-auto">
          <div className="">
            <div className="sm:grid sm:grid-cols-3  gap-3 px-4 py-2 text-white items-center mb-8 hidden">
              <div
                className="rounded px-6 py-4"
                style={{ border: '1px solid #fff', minHeight: '142px' }}
              >
                <h1 className="text-sky-600 font-semibold text-center">
                  COONECT WITH US
                </h1>
                <p className="text-center mt-2 y2-color">
                  <i class="fa-solid fa-phone mr-2 y-color"></i>+1 470-788-8255
                </p>
                <p className="text-center mt-2 y2-color">
                  <i class="fa-regular fa-envelope mr-2 y-color"></i>
                  email@42barandgrill.com
                </p>
              </div>
              <div
                className="rounded px-6 py-4"
                style={{ border: '1px solid #fff', minHeight: '142px' }}
              >
                <div className="flex gap-2 justify-center relative mt-10">
                  <div className="absolute -top-24">
                    <div className="w-20 static z-20">
                      <img src="/logo.png" className="w-full h-full" />
                    </div>
                  </div>
                  <h1 className="text-sky-600 font-normal text-center text-3xl">
                    DEEP
                  </h1>
                  <h1 className="text-white font-normal text-center text-3xl">
                    NET
                  </h1>
                  <h1 className="text-white opacity-55 font-normal text-center text-3xl">
                    SOFT
                  </h1>
                </div>
                <div className="flex justify-between px-20 mt-4 opacity-65">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div
                className="rounded px-6 py-4"
                style={{ border: '1px solid #fff', minHeight: '142px' }}
              >
                <h1 className="text-sky-600 font-semibold text-center">
                  Find us
                </h1>
                <p className="text-center mt-2 y2-color">
                  <i class="fa-solid fa-location-dot mr-2 y-color"></i>327
                  Memorial Dr SE, Atlanta,
                </p>
                <p className="text-center mt-2 y2-color">GA 30312, USA</p>
              </div>
            </div>
            <div className="grid sm:hidden sm:grid-cols-3  gap-3 px-4 py-2 text-white items-center mb-8">
              <div
                className="rounded px-6 py-4"
                style={{ border: '1px solid #fff', minHeight: '142px' }}
              >
                <div className="flex gap-2 justify-center relative mt-10">
                  <div className="absolute -top-24">
                    <div className="w-20 static z-20">
                      <img src="/logo.png" className="w-full h-full" />
                    </div>
                  </div>
                  <h1 className="text-sky-600 font-normal text-center text-3xl">
                    DEEP
                  </h1>
                  <h1 className="text-white font-normal text-center text-3xl">
                    NET
                  </h1>
                  <h1 className="text-white opacity-55 font-normal text-center text-3xl">
                    SOFT
                  </h1>
                </div>
                <div className="flex justify-between px-20 mt-4 opacity-65">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div
                className="rounded px-6 py-4"
                style={{ border: '1px solid #fff', minHeight: '142px' }}
              >
                <h1 className="text-sky-600 font-semibold text-center ">
                  COONECT WITH US
                </h1>
                <p className="text-center mt-2 y2-color">
                  <i class="fa-solid fa-phone mr-2 y-color"></i>+1 470-788-8255
                </p>
                <p className="text-center mt-2 y2-color">
                  <i class="fa-regular fa-envelope mr-2 y-color"></i>
                  email@42barandgrill.com
                </p>
              </div>
              <div
                className="rounded px-6 py-4"
                style={{ border: '1px solid #fff', minHeight: '142px' }}
              >
                <h1 className="text-sky-600 font-semibold text-center">
                  Find us
                </h1>
                <p className="text-center mt-2 y2-color">
                  <i class="fa-solid fa-location-dot mr-2 y-color"></i>327
                  Memorial Dr SE, Atlanta,
                </p>
                <p className="text-center mt-2 y2-color">GA 30312, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'rgb(34 34 34)' }} className="px-8 py-2">
        <div className="flex justify-between flex-wrap y2-color opacity-75 text-sm text-center">
          <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
