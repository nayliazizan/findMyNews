import { Grid, Typography, CardContent, Card } from "@mui/material";
import { useDashboardContext } from "../../context/DashboardContext";
import OrangeButton from "../custom-components/OrangeButton";

function MyFavouritesPanel() {
    const {myFavourites, clearMyFavourites} = useDashboardContext(); //get those from context
    return (
        <Grid 
            container 
            direction="column" 
            alignItems="stretch" 
            justifyContent="flex-start" 
            sx={{minHeight: "90vh", overflow: "auto"}}
        >
            <Grid item justifySelf="flex-start" p={2}>
                <Grid container justifyContent="space-around" alignItems="center">
                    <Grid item>
                        {/*title for fav section */}
                        <Typography variant="p">My Favourites: {myFavourites.length}</Typography>
                    </Grid>

                    <Grid item>
                        {/*this will clear ALL fav news */}
                        <OrangeButton variant="contained" size="small" onClick={clearMyFavourites} className="button-custom">Clear</OrangeButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                {myFavourites.length === 0 ? (
                    <Grid item>
                        {/*show this msg if no fav added */}
                        <Typography variant="p" container direction="column" p={5} sx={{ fontStyle: 'oblique', fontWeight: 500 }}>No fav news added yet</Typography>
                    </Grid>
                ) : (
                    <Grid container direction="column" p={1}>
                        {myFavourites.map((favourite, index) => (
                            //display each fav news item
                            <Card 
                                item 
                                key={`${index}-${favourite.url}`} 
                                xs={12} 
                                className={"favourite-card"}
                                p={1}
                            >
                                <CardContent>
                                    <a href={favourite.url} target="_blank" rel="noreferrer">
                                        <Typography variant="subtitle1">{favourite.title}</Typography>
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}

export default MyFavouritesPanel;