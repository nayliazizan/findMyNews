import { Grid, TextField, Button, Snackbar, Alert, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import loginInfo from "../../data/loginInfo";
import { useNavigate } from "react-router-dom";
import PasswordField from "../custom-components/PasswordField";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [isLoggedInProgress, setIsLoggedInProgress] = useState();
    const navigate = useNavigate();

    useEffect (() => {

    });

    return (
        <Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{minHeight: "100vh", width: "100%"}}>
                <Grid item container direction="column" justifyContent="center" alignItems="center">
                    <Grid item p={1} marginBottom={2}>
                        <Typography variant="h2" textAlign="center" sx={{userSelect: "none"}} color={"text.secondary"}>Find My News</Typography>                    
                    </Grid>

                    <Grid item width={{sm:"50%", lg: "35%"}}>
                        <form>
                            <Grid container direction="column" flexWrap="wrap" gap={2}>
                                <Grid item>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        required
                                        type="text"
                                        label="Name"
                                        placeholder="Your username"
                                        color="primary"
                                    />
                                </Grid>

                                <Grid item>
                                    <PasswordField 
                                        color="primary"
                                        password={password}
                                        handlePasswordChange={handlePasswordChange}
                                        isLoginError={isLoginError}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button fullWidth variant="contained" type="submit" disabled={isLoggedInProgress}>
                                        {isLoggedInProgress ? "Signing In" : "Sign In"}
                                    </Button>
                                    {isLoggedInProgress && <LinearProgress color="primary"/>}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>

            {isLoginError && (<ErrorSnackbar title={"Error Login"} message={"Incorrect Username or Password"}/>)}
        </Grid>
    );
}

export default Login;