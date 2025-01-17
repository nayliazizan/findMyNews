import PropTypes from "prop-types"; //import to validate component props
import { createContext, useContext, useEffect, useState } from "react";
import { LOGIN_LOCAL_STORAGE_KEY, FAVOURITES_LOCAL_STORAGE_KEY } from "../const/consts";

const DashboardContext = createContext();

export function DashboardContextProvider({children}) {
    const localStorageIsUserLoggedIn = JSON.parse(localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY)) || false;
    const localStorageMyFavourite = JSON.parse(localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY)) || [];

    const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsUserLoggedIn);
    const [keyword, setKeyword] = useState(""); //state for search keyword
    const [searchResult, setSearchResult] = useState([]);
    const [myFavourites, setMyFavourites] = useState(localStorageMyFavourite); //state for fav news
    const [news, setNews] = useState([]); //state for search results

    //update keyword for search
    function handleSetKeyword(searchTerm){
        setKeyword(searchTerm);
    }

    //will used in CustomCard component to add/remove the news in fav list
    //myFavourites array is updated based on the URL and title of the news article
    function updateMyFavourites(title, url) {
        const newFavourite = searchResult.find(
            (newsItem) => newsItem.title === title && newsItem.url === url
        );

        const isCurrentFavourite = myFavourites.some(
            (favourite) => 
                favourite.title === newFavourite.title && favourite.url === newFavourite.url
        );

        if(isCurrentFavourite) {
            setMyFavourites((prev) => 
                prev.filter(
                    (prevFavourite) => prevFavourite.title !== newFavourite.title && prevFavourite.url !== newFavourite.url
                )
            );
        } else {
            setMyFavourites((prev) => [...prev, newFavourite]);
        }
    }

    useEffect(() => {
        localStorage.setItem(FAVOURITES_LOCAL_STORAGE_KEY, JSON.stringify(myFavourites));
    }, [myFavourites]);

    function clearMyFavourites() {
        if (myFavourites.length === 0){
            return;
        }
        setMyFavourites([]);
        localStorage.setItem(FAVOURITES_LOCAL_STORAGE_KEY, JSON.stringify([]));
    }

    useEffect(() => {
        setNews(searchResult);
    }, [searchResult]);

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        keyword,
        setKeyword,
        handleSetKeyword,
        myFavourites,
        updateMyFavourites,
        clearMyFavourites,
        searchResult,
        setSearchResult,
        news,
        setNews
    };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export function useDashboardContext() {
    return useContext(DashboardContext);
} // use hook to use dashboard context

//define prop types to validate the props being passed to the component
DashboardContextProvider.propTypes = {
    children: PropTypes.func
}.isRequired; //define type for children prop