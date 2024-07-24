import { Typography, Grid, Button, LinearProgress } from "@mui/material";
import NewsItem from "../NewsItem/NewsItem";

function DisplayResults({handleLoadMore, searchIsLoading}) {
    const {keyword, news} = useHomeContext();
    const title = keyword;
    return (
        <Grid>
            {news.length === 0 && !searchIsLoading ? (
                <Grid container height="100%">
                    <Grid item cs={12}>
                        {keyword === "" ? (
                            <Typography variant="h3">Please search for a topic.</Typography>
                        ) : (
                            <Typography variant="h3">No news bsed on your keyword. Please try again.</Typography>
                        )}
                    </Grid>
                </Grid>
            ) : (
                <Grid container spacing={2} direction={"column"} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item alignSelf={"start"}>
                        <Typography variant="h6">Search results for {title}: </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={{xs:1, lg:2}} columns={{xs:4, sm: 8, md: 12, lg: 12}} alignItems="stretch">
                            {news.map((newsItem, index) => (
                                <Grid item xs={2} sm={4} md={4} lg={3} key={`${index}-${newsItem.title}`}>
                                    <NewsItem news={newsItem}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {news.length !== 0 && (
                        <Grid item marginBottom={1}>
                            <Button variant="contained" onClick={handleLoadMore}>Load More</Button>
                        </Grid>
                    )}

                    <Box sx={{width: "100%", visibility: searchIsLoading ? "visible" : "hidden"}}>
                        <LinearProgress/>
                    </Box>
                </Grid>
            )}
        </Grid>
        
    );
}

export default DisplayResults;