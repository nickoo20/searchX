import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
// import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All");
    const { setImageSearch } = useContext(Context)

    useEffect(() => {
        return () => setImageSearch(false);
    }, [])

    const clickHandler = (menuItem) => {
        let isTypeImage = menuItem.name === "Images"
        setSelectedMenu(menuItem.name);
        setImageSearch(isTypeImage ? true : false)
    }

    return (
        <div
            className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow">
                    <Link to="/">
                        {/* <img className="hidden md:block w-[92px] mr-10" src={Logo} /> */}
                        <div className="text-xl font-bold tracking-wider mr-9 hidden md:block">
                            <span className="text-blue-700">S</span>
                            <span className="text-red-500">e</span>
                            <span className="text-yellow-500">a</span>
                            <span className="text-blue-700">r</span>
                            <span className="text-green-600">c</span>
                            <span className="text-red-500">h</span>
                            <span className="text-3xl shadow-c">X</span>
                        </div>
                    </Link>
                    <SearchInput from="searchResult" />
                </div>
                <div className="hidden md:block">
                    <ProfileIcon />
                </div>
            </div>
            <div className="flex ml-[19px] mt-3 gap-3 mb-3">
                {menu.map((menu, index) => (
                    <span
                        key={index}
                        className={`h-9 w-17 flex items-center p-3  text-[#5f6368] cursor-pointer ring-offset-1 ring-1 ring-gray-200 hover:bg-gray-100 relative rounded-full
                    ${selectedMenu === menu.name ? "text-blue-500" : ""
                            } `}
                        onClick={() => clickHandler(menu)}
                    >
                        <span className="hidden md:block mr-2">{menu.icon}</span>
                        <span className="text-sm">{menu.name}</span>
                        {selectedMenu === menu.name && (
                            <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SearchResultHeader;
