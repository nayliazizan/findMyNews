import { useCallback, useState } from "react";
import { Grid } from "@mui/material";
import Header from "../Header/Header";
import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import DisplayResults from "../display-results/DisplayResults";

function Home() {
    /*
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
    */
    return (
        <Grid container className="main-container" direction={"column"}>
            <Grid className="header-container" item lg={1} style={{maxHeight: "10vh"}} borderBottom={2}>
                <Header/>
            </Grid>

            <Grid className="header-container" item lg={11}>
                <Grid container diection="row" style={{height: "100%"}} height="90vh">
                    <Grid className="left-panel-container" item borderRight={{xs:0, sm:1, md:2}} lg="2.5" md={3} sm={4} xs={12}>
                        <MyFavouritesPanel 
                            style={{overflowY: "scroll"}}
                            /*
                            handleSetKeyword={handleSetKeyword}
                            myFavourites={myFavourites}
                            clearmyFavourites={clearmyFavourites}
                            */
                        ></MyFavouritesPanel>
                    </Grid>

                    <Grid className="result-container" item height="90vh" lg="9.5" md={9} sm={8} xs={12} p={2}>
                        <DisplayResults /* keyWord={keyWord} updateMyFavourites={updateMyFavourites} */></DisplayResults>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;