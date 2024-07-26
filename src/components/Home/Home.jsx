import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Header from "../Header/Header";
import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import DisplayResults from "../display-results/DisplayResults";
import { useDashboardContext } from "../../context/DashboardContext";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const PAGE_SIZE = process.env.REACT_APP_PAGE_SIZE;
//const PAGE_NO = process.env.REACT_APP_PAGE_NO;
const DEVENV = process.env.REACT_APP_DEV;

function Home() {
    const {keyword, searchResult, setSearchResult} = useDashboardContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchIsLoading, setSearchIsLoading] = useState(false);

    const fetchInitialSearchResults = useCallback(async()=> {
        setCurrentPage(1);
        if (keyword === ""){
            if (searchResult.length === 0){
                return;
            }
            setSearchResult([]);
            return;
        }

        setSearchIsLoading(true);

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&searchIn=title&pageSize=${PAGE_SIZE}&page=1&language=en`);
            const data = response.data;
            const articles = data.articles;

            if(data.totalResults === 0) {
                setSearchResult([]);
            } else {
                setSearchResult(articles);
            }
        } catch (error) {
            if (DEVENV === "false") {
                alert("Requests from browser arent allowed, except from localhost");
            }
            alert(error);
        }
        setSearchIsLoading(false);
        // eslint-disable-next-line
    }, [keyword]);

    useEffect(() => {
        fetchInitialSearchResults();
    }, [fetchInitialSearchResults]);

    function handleLoadMore(){
        setCurrentPage((prev) => prev + 1);
    }

    const fetchNextPage = useCallback(async() => {
        if(currentPage === 1){
            return;
        }

        setSearchIsLoading(true);

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&searchIn=title&pageSize=${PAGE_SIZE}&page=${currentPage}&language=en`);
            const data = response.data;
            const articles = data.articles;
    
            if(data.totalResults > 0) {
                setSearchResult((prevSearchResult)=> [
                    ...prevSearchResult,
                    ...articles
                ]);
            }
        } catch (error) {
            if(DEVENV === "false") {
                alert("Request from browser arent allowed except localhost")
            }
            alert(error);
        }

        setSearchIsLoading(false);
        // eslint-disable-next-line
    }, [currentPage, keyword]);

    useEffect(() => {
        fetchNextPage();
    }, [fetchNextPage]);

    return (
        <Grid container className="main-container" direction={"column"}>
            <Grid className="header-container" item lg={1} style={{maxHeight: "10vh"}} borderBottom={2}>
                <Header/>
            </Grid>

            <Grid className="content-container" item lg={11}>
                <Grid container diection="row" style={{height: "100%"}} height="90vh">
                    <Grid className="left-panel-container" item borderRight={{xs:0, sm:1, md:2}} lg={2.5} md={3} sm={4} xs={12}>
                        <MyFavouritesPanel 
                            //style={{overflowY: "scroll"}}
                            /*
                            handleSetKeyword={handleSetKeyword}
                            myFavourites={myFavourites}
                            clearmyFavourites={clearmyFavourites}
                            */
                        ></MyFavouritesPanel>
                    </Grid>

                    <Grid className="right-panel-container" item height="90vh" lg={9.5} md={9} sm={8} xs={12} p={2}>
                        <DisplayResults /* keyword={keyword} */ handleLoadMore={handleLoadMore} searchIsLoading={searchIsLoading}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;