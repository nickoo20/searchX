// import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput" ;
import Footer from "./Footer" ;
/*
the Home component is responsible for rendering a simplified version of the Google homepage, including the logo, search input, search buttons, and a footer.*/

const Home = () => {
    return (
    <div className="flex h-[100vh] flex-col">
                    <HomeHeader/>
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-14">
                    <div className="flex text-3xl font-bold tracking-wider text-[60px] mb-9x font-roboto">
                        <span className="text-blue-700">S</span>
                        <span className="text-red-500">e</span>
                        <span className="text-yellow-500">a</span>
                        <span className="text-blue-700">r</span>
                        <span className="text-green-600">c</span>
                        <span className="text-red-500">h</span>
                        <span className="text-8xl transform rotate-45 shadow-c">X</span>
                    </div>
                    {/* <img className="w-[172px] md:w-[272px] mb-8" src = {Logo}/> */}
                    <SearchInput/>
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Google Search </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            I'm Feeling Lucky</button>

                    </div>
                </div>
            </main>
        <Footer/>
    </div>
    ) ;
} ;

export default Home ;

