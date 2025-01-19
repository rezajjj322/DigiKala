import logoImg from "../../assets/logo.svg"
import { CiSearch } from "react-icons/ci";
import { IoEnterOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import MegaMenu from "../megaMenu/MegaMenu";

function Navbar() {
  return (
    <div className="flex flex-col bg-white shadow-lg">
      <div className="flex flex-row-reverse justify-between items-center flex-wrap p-5 w-full h-auto">
        <div className="flex flex-row-reverse items-center w-full lg:w-4/6 max-sm:flex-col max-sm:items-start">
          <img src={logoImg} alt="Logo" className="max-md:w-28 lg:w-44 max-sm:hidden mx-4"/>
          <div className="relative w-full lg:ml-8 max-sm:w-full">
            <input
              type="text"
              placeholder="جستجو"
              className="w-full text-right bg-gray-200 outline-none rounded-lg p-2 pl-10 pr-9"
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 size-5" />
          </div>
        </div>
        <div className="flex w-full flex-row-reverse lg:w-1/4 justify-around items-center max-sm:mt-4">
          <div className="flex flex-row-reverse border border-gray-500 rounded-lg px-4 py-2 items-center max-sm:w-full max-sm:justify-around">
            <div className="flex flex-row-reverse items-center border-l border-gray-800 px-2 max-sm:border-none">
              <span className="mx-1 font-medium mb-1 cursor-pointer">ورود</span>
              <IoEnterOutline size={25} className="hidden md:block" />
            </div>
            <span className="px-2 font-medium cursor-pointer">ثبت نام</span>
          </div>
          <FiShoppingCart size={30} className="cursor-pointer text-gray-600" />
        </div>
      </div>

      <div className="bg-gray-100 p-4 text-center max-sm:text-sm">
        <MegaMenu />
      </div>
    </div>
  );
}

export default Navbar;
