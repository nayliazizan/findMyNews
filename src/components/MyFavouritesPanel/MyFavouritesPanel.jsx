import { Grid, Typography, Button, CardContent, Card } from "@mui/material";
import { useDashboardContext } from "../../context/DashboardContext";

function MyFavouritesPanel() {
    const {myFavourites, clearMyFavourites} = useDashboardContext();
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
                        <Typography variant="p">My Favourites: {myFavourites.length}</Typography>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" size="small" onClick={clearMyFavourites} className="button-custom">Clear</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="column" p={1}>
                    {myFavourites.map((favourite, index) => (
                        <Card 
                            item 
                            key={`${index}-${favourite.url}`} 
                            xs={12} 
                            className={"favourite-card"} // OR favourite-item favourite-item-light
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
            </Grid>
        </Grid>
    );
}

export default MyFavouritesPanel;