import { TextField, Typography, Grid, Button, Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

function Header() {
    return (
        <Grid container alignItems="center" justifyContent={{xs: "space-around"}} height="10vh" width="100%">
            <Grid item xs={2} sm={2} md={2} justifySelf="flex-start" width="100%">
                <Typography 
                    variant="h6" 
                    component="h1" 
                    ml={1} 
                    textOverflow="ellipsis" 
                    sx={{userSelect: "none"}} 
                    noWrap 
                    color="text.secondary"
                >Find My News</Typography>
            </Grid>
            
            <Grid item className="search" xs={10} sm={5} md={6}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={8} md={10}>
                        <TextField 
                            autoFocus 
                            fullWidth 
                            type="search" 
                            placeholder="What news you are looking for?" 
                            size="small" 
                            color="primary"
                        ></TextField>
                    </Grid>

                    <Grid item xs={4} md={2}>
                        <Button
                            variant="contained"
                        >Search</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className="logout" xs={12} sm={5} md={4}>
                <Grid 
                    container 
                    gap={1} 
                    justifyContainer={{xs: "center", md: "flex-end"}} 
                    alignItems="center" 
                    width="100%"
                >

                    <Grid item>
                        <Chip icon={<FaceIcon/>} variant="filled" color="primary"/>
                    </Grid>

                    <Grid item marginRight={2}>
                        <Button variant="contained">
                            Logout
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;