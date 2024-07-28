import { TextField, Typography, Grid, Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { LOGIN_LOCAL_STORAGE_KEY, USERNAME_LOCAL_STORAGE_KEY } from "../../const/consts";
import { useDashboardContext } from "../../context/DashboardContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrangeButton from "../custom-components/OrangeButton";
import { orange, grey } from "@mui/material/colors";

function Header() {
    const localStorageUsername = JSON.parse(localStorage.getItem(USERNAME_LOCAL_STORAGE_KEY));

    const {isLoggedIn, setIsLoggedIn, handleSetKeyword, setKeyword, setNews, setSearchResult } = useDashboardContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [username, setUsername] = useState(localStorageUsername);
    const navigate = useNavigate();

    //direct user to login page if they not loggin yet
    useEffect(() => {
        if (!isLoggedIn){
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    //handle enter key press for search
    function handleKeyPress(e) {
        if(e.key === "Enter"){
            handleSetKeyword(searchTerm);
        }
    }

    //handle logout and clear session data
    function handleLogout() {
        setIsLoggedIn(false);
        setUsername("");
        setSearchResult([]);
        setKeyword("");
        setNews("");

        //remove username n login state from localstorage on logout
        localStorage.removeItem(USERNAME_LOCAL_STORAGE_KEY); 
        localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
    }

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
                >FIND MY NEWS</Typography>
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyPress}
                        ></TextField>
                    </Grid>

                    <Grid item xs={4} md={2} sx={{width: '100%', whiteSpace: 'nowrap'}}>
                        <OrangeButton
                            variant="contained"
                            onClick={() => handleSetKeyword(searchTerm)}
                            className="button-custom"
                        >Search For News</OrangeButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className="logout" xs={12} sm={5} md={4}>
                <Grid 
                    container 
                    gap={1} 
                    justifyContent={{xs: "center", md: "flex-end"}} 
                    alignItems="center" 
                    width="100%"
                >

                    <Grid item>
                        <Chip icon={<FaceIcon/>} variant="filled" sx={{color: grey[100], backgroundColor: orange[500]}} label={username} className="button-custom"/>
                    </Grid>

                    <Grid item marginRight={2}>
                        <OrangeButton variant="contained" onClick={handleLogout} className="button-custom">
                            Logout
                        </OrangeButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;