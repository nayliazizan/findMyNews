import { Typography, Grid } from "@mui/material";

function DisplayResults() {
    return (
        <Grid>
            <Grid container height="100%">
                <Grid item cs={12}>
                    <Typography variant="h3">Please search for a topic.</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DisplayResults;