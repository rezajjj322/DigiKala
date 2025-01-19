import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const DigiKalaService = () => {
  const [itemLinks, setItemLinks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          "/v2/mobile/?__digicdn_js_challenge=cab5c7581059b12536d8e907a510f7bfab7e3767"
        );
        const responseData = await response.data;
        const deepLink = responseData.data.widgets.find((item) => item.type === "deep_links").data;
        setItemLinks(deepLink);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex items-start my-8 overflow-x-hidden">
        <div className="w-full max-lg:overflow-x-auto flex justify-between items-center flex-row-reverse">
          <ul className="w-11/12 flex flex-row-reverse justify-around items-center space-x-4 max-md:w-max">
            {itemLinks.map((item) => (
              <Link key={item.id}>
                <li
                  key={item.id}
                  className=" w-full h-32 flex flex-col justify-center items-center min-w-[107px]"
                >
                  <img src={item.icon.url} className="w-16 h-16 block" />
                  <h3 className="h-8 block text-center">{item.title}</h3>
                </li>
              </Link>
            ))}
          </ul>
          <button
            onClick={handleToggle}
            className="bg-gray-400 rounded-full w-16 h-16 block ml-3 font-bold p-2"
          >
            بیشتر
          </button>
        </div>
      </div>

      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white relative rounded-lg p-6 w-11/12 max-w-4xl overflow-auto max-h-[80vh]">
            <div className="flex justify-between flex-row-reverse items-center border-b border-gray-400 mb-3">
              <h1 className="text-right font-bold mb-2">خدمات دیجی کالا</h1>
              <button onClick={handleToggle} className="mb-2">
                <IoIosCloseCircle size={35} color="red" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {itemLinks.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center"
                >
                  <Link to={"/"} className="flex flex-col items-center">
                  <img src={item.icon.url} className="w-16 h-16 block" />
                    <h3 className="text-center text-sm font-medium mt-2">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DigiKalaService;



