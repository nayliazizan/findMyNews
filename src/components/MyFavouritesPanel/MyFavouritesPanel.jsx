import { Grid, Typography, Button } from "@mui/material";
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
                        <Button variant="contained" size="small" onClick={clearMyFavourites}>Clear</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="column" p={1}>
                    {myFavourites.map((favourite, index) => (
                        <Grid 
                            item 
                            key={`${index}-${favourite.url}`} 
                            xs={12} 
                            className={"favourite-item favourite-item-dark"} // OR favourite-item favourite-item-light
                            p={1}
                        >
                            <a href={favourite.url} target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1">{favourite.title}</Typography>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MyFavouritesPanel;