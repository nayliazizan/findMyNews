import { VisibilityOffIcon } from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";

function PasswordField(props) {
    return (
        <TextField 
            fullWidth
            required
            label="Password"
            placeholder="********"
            {...otherProps}
            type={showPassword ? "text" : "password"}
            helperText={isLoginError && "Incorrect password"}
            error={isLoginError}
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
    isLoginError: PropTypes.bool.isRequired,
    passwordVisible: PropTypes.bool
}

PasswordField.defaultProps = {
    passwordVisible: false
}

export default PasswordField;