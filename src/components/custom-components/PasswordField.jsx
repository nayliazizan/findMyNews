import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

function PasswordField(props) {
    const { password, handlePasswordChange, errorMessage, passwordVisible, ...otherProps} = props;
    const [showPassword, setShowPassword] = useState(passwordVisible);
    
    function handleShowPassword(){
        setShowPassword(!showPassword);
    }

    return (
        <TextField 
            fullWidth
            required
            label="Password"
            placeholder="********"
            {...otherProps}
            type={showPassword ? "text" : "password"}
            helperText={errorMessage && "Incorrect password"}
            error={errorMessage}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} onMouseDown={handleShowPassword}>
                            {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
}

PasswordField.propTypes = {
    password: PropTypes.string.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.bool.isRequired,
    passwordVisible: PropTypes.bool
}

PasswordField.defaultProps = {
    passwordVisible: false
}

export default PasswordField;