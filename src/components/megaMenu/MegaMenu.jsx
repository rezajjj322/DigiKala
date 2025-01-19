import { useEffect, useState } from "react";
import MegaMenuItem from "./MegaMenuItem";
import { IoMdMenu } from "react-icons/io";
import axios from "axios";

const MegaMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [hover, setHover] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(null);

  useEffect(() => {
    const fetchMegaMenu = async () => {
      try {
        const response = await axios.get(
          "/v1/dictionaries/?types%5B0%5D=states&types%5B1%5D=cities&types%5B2%5D=user_jobs&types%5B3%5D=mega_menu&types%5B4%5D=universal&types%5B5%5D=category_tree&types%5B6%5D=districts&types%5B7%5D=seo_content&types%5B8%5D=superapp_services&hashes%5B0%5D=854520e5da5b50175e401c36b8002ecc&hashes%5B1%5D=5c68aab0bdece172d03c36bdfe0877bc&hashes%5B2%5D=4ee2c70608fae0b62a7aefe875e714e1&hashes%5B3%5D=add99c55c52d0aeaefbe13402cd71146&hashes%5B4%5D=01caeb0ab1ee1a78cc7d40c4a89e0640&hashes%5B5%5D=1acfc92e950bd8e3d9bf5552d23ad367&hashes%5B6%5D=359fcfd07ce7ca2db46e242cfa56db22&hashes%5B7%5D=7672f6b56be95cd4216237a337da19bf&hashes%5B8%5D=1ef2eab7c7443015dfafa133924ff517"
        );
        console.log(response)
        const responseData = await response.data;
        
        const megaMenu = responseData.data.find((item) => item.type === "mega_menu").data;
        const menuArray = Array.isArray(megaMenu)
          ? megaMenu
          : Object.values(megaMenu);
        setMenuData(menuArray);
      } catch (error) {
        console.log("Error fetching MegaMenu:", error);
      }
    };

    fetchMegaMenu();
  }, []);

  return (
    <div className="flex justify-between items-center" dir="rtl">
      <div className="flex justify-between items-center w-full">
        <div
          className="w-44 relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span className="flex justify-center items-center py-4 cursor-pointer font-bold">
            <IoMdMenu /> دسته بندی کالا ها
          </span>
          {hover && (
            <div className="absolute bg-gray-200 z-50 top-14 w-[70vw] h-[70vh] overflow-y-scroll">
              <ul className="flex flex-col justify-start items-start border-l border-gray-400 cursor-pointer">
                {menuData.length > 0 ? (
                  menuData[0].map((item) => (
                    <li
                      onMouseEnter={() => setHoverTitle(item)}
                      onMouseLeave={() => setHoverTitle(null)}
                      key={item.id}
                      className="text-start p-2 hover:bg-white transition duration-300 w-full font-bold flex justify-between"
                    >
                      {item.title}
                      {hoverTitle === item && item.children && (
                        <div className="absolute right-[16rem] top-0 bg-gray-200 p-4 w-[50vw] border border-gray-300">
                          <ul className="space-y-2 flex flex-wrap justify-center items-center">
                            {item.children.map((child) => (
                              <li
                                key={child.id}
                                className="p-2 hover:bg-gray-300 text-gray-900 rounded-md transition cursor-pointer"
                              >
                                {child.title}
                                {hoverTitle === item && child.children && (
                                  <div className=" bg-gray-200 p-4 w-[50vw] border border-gray-300">
                                    <ul className="space-y-2 flex flex-col justify-center items-center">
                                      {child.children.map((itemChild) => (
                                        <li
                                          key={itemChild.id}
                                          className="p-2 hover:bg-gray-300 text-gray-500 rounded-md transition cursor-pointer"
                                        >
                                          {itemChild.title}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))
                ) : (
                  <p>هیچی</p>
                )}
              </ul>
            </div>
          )}
        </div>
        <MegaMenuItem />
      </div>
    </div>
    
  );
};

export default MegaMenu;
