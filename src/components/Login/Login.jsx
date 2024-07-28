import { Grid, TextField, Button, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import loginInfo from "../../data/loginInfo"; //import dummy login data
import { useNavigate } from "react-router-dom";
import PasswordField from "../custom-components/PasswordField";
import ErrorSnackbar from "../custom-components/ErrorSnackbar";
import { useDashboardContext } from "../../context/DashboardContext";
import { LOGIN_LOCAL_STORAGE_KEY, USERNAME_LOCAL_STORAGE_KEY } from "../../const/consts";


function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const {isLoggedIn, setIsLoggedIn} = useDashboardContext();
    const [isLoggedInProgress, setIsLoggedInProgress] = useState(false);
    const navigate = useNavigate();

    useEffect (() => {
        if(isLoggedIn){
            navigate("/home");
        }
    }, [isLoggedIn, navigate]);

    function handleUsernameChange(e){
        setErrorMessage(false);
        setUserName(e.target.value); //update username state on change
    }

    function handlePasswordChange(e){
        setErrorMessage(false);
        setPassword(e.target.value); //update password state on change
    }

    function handleSubmit(e){
        e.preventDefault(); //prevent deafult form submission behaviour
        setIsLoggedInProgress(true);

        setTimeout(() => {
            //check if the entered login info match any data in dummy data
            const user = loginInfo.find(
                (user) => user.username === userName && user.password === password
            );

            if(user){
                setIsLoggedIn(true);
                localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, JSON.stringify(true));
                localStorage.setItem(USERNAME_LOCAL_STORAGE_KEY, JSON.stringify(userName));
                setErrorMessage(false);
                navigate("/home");
            } else {
                //alert if login info are invalid
                setErrorMessage(true);
            }
            setIsLoggedInProgress(false);
        }, 1000);
    }

    //rendering the login form
    return (
        <Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{minHeight: "100vh", width: "100%"}}>
                <Grid item container direction="column" justifyContent="center" alignItems="center">
                    <Grid item p={1} marginBottom={2}>
                        <Typography variant="h2" textAlign="center" sx={{userSelect: "none"}} color={"text.secondary"}>Find My News</Typography>                    
                    </Grid>

                    <Grid item width={{sm:"50%", lg: "35%"}}>
                        <form onSubmit={handleSubmit}>
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
                                        helperText={errorMessage && "Incorrect username"}
                                        error={errorMessage}
                                        value={userName}
                                        onChange={handleUsernameChange}
                                    />
                                </Grid>

                                <Grid item>
                                    <PasswordField 
                                        color="primary"
                                        password={password}
                                        handlePasswordChange={handlePasswordChange}
                                        errorMessage={errorMessage}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button fullWidth variant="contained" type="submit" disabled={isLoggedInProgress} className="button-custom">
                                        {isLoggedInProgress ? "Signing In" : "Sign In"}
                                    </Button>
                                    {isLoggedInProgress && <LinearProgress color="primary"/>}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>

            {errorMessage && (<ErrorSnackbar title={"Error Login"} message={"Incorrect Username or Password"}/>)}
        </Grid>
    );
}

export default Login;