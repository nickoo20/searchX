import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
// import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

/*
The provided code defines a Pagination component that handles navigation between search result pages and displays pagination controls. 
this component is responsible for rendering pagination controls, managing the current page state, and handling navigation between different search result pages. It integrates with React Router for routing and utilizes state and effects for managing the UI behavior based on the current query and pagination data.
*/

const Pagination = ({queries}) => {
    const { query } = useParams() ;
    const [page, setPage] = useState(pagination[0].startIndex) ; 
    const navigate = useNavigate() ;

    useEffect(() => {
        setPage(pagination[0].startIndex)
    }, [query])

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex)
        navigate(`/${query}/${startIndex}`)
    }
    
    return (
        <div className="flex flex-col items-center py-14">
            <div className="relative text-[#4285f4] ">
                {queries.previousPage && (
                    <div 
                        className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                        onClick={() => paginationClickHandler(queries.previousPage[0].startIndex)}>
                        <FiChevronLeft size={20} className="cursor-pointer" />
                        <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                            Prev  
                        </div>
                    </div>
                )}
                {/* <img className="w-[250px] md:w-[300px] " src={Logo} /> */}
                <div className="flex text-xl font-bold tracking-wider text-[60px] mb-9x font-roboto gap-2">
                        <span className="text-blue-700">S</span>
                        <span className="text-red-500">e</span>
                        <span className="text-yellow-500">a</span>
                        <span className="text-blue-700">r</span>
                        <span className="text-green-600">c</span>
                        <span className="text-red-500">h</span>
                        <span className="text-red-500">x</span>
                        <span className="text-red-500">x</span>
                        <span className="text-black font-bold shadow-c">X</span>
                    </div>
                {queries.nextPage && (
                    <div 
                        className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                        onClick={() => paginationClickHandler(queries.nextPage[0].startIndex)}>
                        <FiChevronRight size={20} className="cursor-pointer" />
                        <div className="cursor-pointer absolute right-[-5px] top-[30px] hidden md:block">
                            Next
                        </div>
                    </div>
                )}
            </div>
            <div className="flex gap-2.5 text-blue-500 text-sm ">
                {pagination.map((p)=>(
                    <span key={p.page}
                    onClick = {()=> paginationClickHandler(p.startIndex)}
                    className={`cursor-pointer ${page === p.startIndex ? "text-black" : ""}`}
                    >{p.page}</span>
                ))}
            </div>
        </div>
    );    
};

    export default Pagination;
