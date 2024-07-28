import { orange, grey } from "@mui/material/colors";
import { Button } from "@mui/material";

function OrangeButton({children, ...otherProps}){
    const buttonStyle = {
        color: grey[100],
        backgroundColor: orange[500],
        "&:hover": {
            backgroundColor: orange[700]
        }
    }
    return <Button sx={buttonStyle} {...otherProps}>{children}</Button>
}

export default OrangeButton;