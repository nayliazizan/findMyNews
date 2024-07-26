import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {red, green} from "@mui/material/colors"
import { useDashboardContext } from "../../context/DashboardContext";

function CustomCard ({author, date, url, urlToImage, content}) {
    const {myFavourites, updateMyFavourites} = useDashboardContext();
    const avatarName = author.charAt(0).toUpperCase();

    function getDate(date){
        const dateTime = new Date(date);
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, "0");
        const day = String(dateTime.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }
    return (
        <Card sx={{maxWidth: 345, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}} variant="outlined">
            <CardHeader 
                avatar={<Avatar sx={{bgcolor: green[500]}} aria-label="recipe">
                    {avatarName}
                </Avatar>}
                title={author}
                subheader={getDate(date)}
            />

            <CardActionArea href={url} target="_blank" rel="noreferrer">
                <CardMedia component="img" height="250" image={urlToImage} alt={content}/>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions disableSpacing>
                <IconButton 
                    aria-label="add to favourites" 
                    onClick={() => updateMyFavourites(content, url)} 
                    sx={{
                        "&:hover": {color:red[400]},
                        color: myFavourites.some(
                            (favourite) => favourite.url === url && favourite.title === content
                        ) ? red[400] : "primary"
                    }}
                    color="secondary"
                >
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

CustomCard.propTypes = {
    author: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    content: PropTypes.string
}

export default CustomCard;