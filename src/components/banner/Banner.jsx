import axios from "axios";
import { useEffect, useState } from "react";

const Banner = () => {
  const [bannerItem, setBannerItem] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          "/v2/mobile/?__digicdn_js_challenge=cab5c7581059b12536d8e907a510f7bfab7e3767"
        );
        const responseData = response.data;

        const bannerWidget = responseData.data.widgets.find(
          (item) => item.type === "simple_banner"
        ).data;

        // const categoryData = bannerWidget.data;
        const categoryArray = Array.isArray(bannerWidget)
          ? bannerWidget
          : Object.values(bannerWidget);
        setBannerItem(categoryArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    axiosData();
  }, []);
  return (
    <div className="w-full flex justify-center">
    <ul className="flex flex-wrap flex-row-reverse gap-2 justify-around">
      {bannerItem.map((item) => (
        <li
          key={item.id}
          className="w-1/3 md:w-1/5 flex justify-center"
        >
          <img
            src={item.image}
            alt=""
            className="rounded-lg w-full h-auto object-cover"
          />
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default Banner;
