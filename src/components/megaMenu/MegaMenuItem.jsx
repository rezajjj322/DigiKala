import { menu } from "../../data";
import { IoLocationOutline } from "react-icons/io5";

const MegaMenuItem = () => {
  return (
    <div className="flex justify-between items-center w-full" dir="rtl">
      <ul className="flex">
        {menu.map((item) => (
          <li
            className="mx-3 flex justify-center items-center text-gray-500 cursor-pointer hover:border-b-2 hover:border-b-red-600 hover:duration-100 py-1 h-fit"
            key={item.id}
          >
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        <span className="w-34 group flex justify-center items-center drop-shadow-xl text-gray-500 cursor-pointer">
          <span>
            <IoLocationOutline />
          </span>{" "}
          ارسال به تهران
          <span className="bg-gray-700 w-64 h-10 text-white absolute z-50 left-2 flex justify-center items-center rounded-xl p-1 opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:translate-y-14 duration-600">
            درحال مشاهده تخفیف ها و کالا های تهران
          </span>
        </span>
      </div>
    </div>
  );
};

export default MegaMenuItem;
