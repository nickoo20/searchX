import { createContext, useState, useEffect } from "react";

// const getInitialTheme = () => {
//     if(typeof window !== "undefined" && window.localStorage){
//          const storedPrefs = window.localStorage.getItem(current-theme) ;
//          if(typeof storedPrefs === "string"){
//             return storedPrefs ;
//          }
//          if(window.matchMedia("(prefers-color-scheme:dark)").matches){
//             return "dark" ;
//          }
//     }
//     return "light" ;
// }

export const Context = createContext();

export const AppContext = (props) => {
      const[imageSearch, setImageSearch] = useState(false) ;
    //   const [theme, setTheme] = useState(getInitialTheme());
    //   const toggleTheme = (curr) => {
    //     setTheme((curr) => (curr == "light" ? "dark" : "light")) ;
    //   }

    // useEffect(()=>{
    //     checkTheme(theme) ;
    // }, [theme]) ;

    // const checkTheme = (existing) => {
    //     const root = window.document.documentElement ;
    //     const isDark = existing === "dark" ;
    //     root.classList.remove(isDark ? 'light' : 'dark') ; 
    //     root.classList.add(existing) ;
    //     localStorage.setItem("current-theme", existing) ;
        
    // }
     return (
        <Context.Provider value={{
            imageSearch, setImageSearch
            //  theme, setTheme
        }
        }>
            {props.children}
        </Context.Provider>
     )
};
