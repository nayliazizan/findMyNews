import { useCallback, useState } from "react";

function Home() {
    const {keyWord, searchResult, setSearchResult} = useHomeContext();
    const [currentPage, setCurrentPage] = useState();
    const [searchIsLoading, setSearchIsLoading] = useState();

    const fetchInitialSearchResults = useCallback(async=()=> {
        setCurrentPage(1);
        if (keyWord === ""){
            if (searchResult.length === 0){
                return;
            }
            setSearchResult([]);
            return;
        }

        setSearchIsLoading(true);

        try {
            const response = await.axios.get();
        }
    })
    return (
        <Grid container className="main-container" direction={"column"}>
            <Grid className="header-container" item lg={1} style={{maxHeight: "10vh"}}>

            </Grid>
            <Grid className="header-container" item lg={11}>
                <Grid container diection="row" style={{height: "100%"}}>
                    <Grid className="left-panel-container" item lg="2.5">
                        <MyFavouritesPanel 
                            style={{overflowY: "scroll"}}
                            handleSetKeyword={handleSetKeyword}
                            myFavourites={myFavourites}
                            clearmyFavourites={clearmyFavourites}
                        ></MyFavouritesPanel>
                    </Grid>
                    <Grid className="result-container" item lg="9.5">
                        <DisplayResults keyWord={keyWord} updateMyFavourites={updateMyFavourites}></DisplayResults>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;