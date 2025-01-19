import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainCategories = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          "/v2/mobile/?__digicdn_js_challenge=cab5c7581059b12536d8e907a510f7bfab7e3767"
        );
        const responseData = response.data;

        const categoryWidget = responseData.data.widgets.find(
          (item) => item.type === "main_categories_grid"
        ).data;
        console.log(categoryWidget)

        // const categoryData = categoryWidget.data;
        const categoryArray = Array.isArray(categoryWidget)
          ? categoryWidget
          : Object.values(categoryWidget);
        setCategoryItems(categoryArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    axiosData();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center my-8">
      <h1 className="text-2xl font-bold my-8">خرید بر اساس دسته بندی</h1>
      <ul className="flex flex-wrap justify-center gap-4 flex-row-reverse">
        {categoryItems.length > 0 ? (
          categoryItems[0].map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 cursor-pointer border border-gray-100 rounded-lg"
                onClick={() => navigate(`/ProductCategory/${item.id}`)}
              >
                <img src={item.image} alt={item.title} className="w-16 h-16" />
                <h3 className="text-center text-sm font-medium mt-2">
                  {item.title}
                </h3>
              </li>
          ))
        ) : (
          <p>هیچی</p>
        )}
      </ul>
    </div>
  );
};

export default MainCategories;
