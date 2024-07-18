import { Grid, TextField, Button, Snackbar, Alert, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import loginInfo from "../../data/loginInfo";
import { useNavigate } from "react-router-dom";

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
            <Grid>
                <Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;