import { Grid, Typography, Button } from "@mui/material";

function MyFavouritesPanel() {
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
                        <Typography variant="p">My Favs: </Typography>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" size="small">Clear</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="column" p={1}>
                    <Grid>
                        <Grid></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MyFavouritesPanel;