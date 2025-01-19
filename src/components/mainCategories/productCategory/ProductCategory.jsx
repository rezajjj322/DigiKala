import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const [productItem, setProductItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const requestData = async () => {
      try {
        const response = await axios.get(`/v2/mobile/?__digicdn_js_challenge=cab5c7581059b12536d8e907a510f7bfab7e3767_id=${id}`);
        const responseData = response.data;
        const itemCategoryWidgets = responseData.data.find((item) => item.type === "main_categories_grid")

      } catch (err) {
        console.log(err)
      }
    };

    requestData()
  }, [id]);

  return <div></div>;
};

export default ProductCategory;
