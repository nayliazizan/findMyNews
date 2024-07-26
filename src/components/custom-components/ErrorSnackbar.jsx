import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

function ErrorSnackbar({title, message, duration}){
    const [open, setOpen] = useState(true);

    function handleClose(_event, reason){
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    }
 
    return (
        <Snackbar open={open} autoHideDuration={duration} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
            <Alert onClose={handleClose} severity="error" sx={{width: "100%"}}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>        
        </Snackbar>
    );
}

ErrorSnackbar.propTypes = {
    title: PropTypes.string.isRequired,
    message:  PropTypes.string.isRequired,
    duration:  PropTypes.number
}

ErrorSnackbar.defaultProps = {
    duration: 3000
}

export default ErrorSnackbar;