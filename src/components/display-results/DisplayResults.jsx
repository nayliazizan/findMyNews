import { Typography, Grid, Button, LinearProgress, Box } from "@mui/material";
import NewsItem from "../NewsItem/NewsItem";
import { useDashboardContext } from "../../context/DashboardContext";
import PropTypes from "prop-types"; //import to validate component props

function DisplayResults({handleLoadMore, searchIsLoading}) {
    const {keyword, news} = useDashboardContext(); //access keyword and news from context
    const title = keyword; //assign keyword to title for display
    return (
        <Grid>
            {news.length === 0 && !searchIsLoading ? ( 
                //show msg if no news found
                <Grid container height="100%">
                    <Grid item xs={12}>
                        {keyword === "" ? (
                            //prompt user to search
                            <Typography variant="h3" p={5} sx={{ fontStyle: 'oblique', fontWeight: 500 }}>Please search for a topic.</Typography> 
                        ) : (
                            //no news found
                            <Typography variant="h3" p={5} sx={{ fontStyle: 'oblique', fontWeight: 500 }}>No news based on your keyword. Please try again.</Typography> 
                        )}
                    </Grid>
                </Grid>
            ) : (
                //display news based on search keyword
                <Grid container spacing={2} direction={"column"} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item alignSelf="start">
                        <Typography variant="h6">Search results for {title}: </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={{xs:1, lg:2}} columns={{xs:4, sm: 8, md: 12, lg: 12}} alignItems="stretch">
                            {news.map((newsItem, index) => (
                                <Grid item xs={2} sm={4} md={4} lg={3} key={`${index}-${newsItem.title}`}>
                                    <NewsItem news={newsItem}/> {/* display each news item */}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {news.length !== 0 && (
                        <Grid item marginBottom={1}>
                            {/*click this will load more news*/}
                            <Button variant="contained" onClick={handleLoadMore} className="button-custom">Load More</Button> 
                        </Grid>
                    )}

                    <Box sx={{width: "100%", visibility: searchIsLoading ? "visible" : "hidden"}}>
                        <LinearProgress/> {/* show loading progress*/}
                    </Box>
                </Grid>
            )}
        </Grid>
        
    );
}

//define prop types to validate the props being passed to the component
DisplayResults.propTypes = {
    //to load more news
    handleLoadMore: PropTypes.func.isRequired,
    //loading state for search
    searchIsLoading: PropTypes.bool.isRequired
};

export default DisplayResults;