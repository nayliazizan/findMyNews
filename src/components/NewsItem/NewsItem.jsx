import CustomCard from "../custom-components/CustomCard";
import PropTypes from "prop-types";

function NewsItem({news}) {
    const {source, publishedAt, url, urlToImage, title} = news;
    return (
        <CustomCard author={source.name} date={publishedAt} url={url} urlToImage={urlToImage} content={title}/>
    );
}

NewsItem.propTypes = {
    news: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        description: PropTypes.string,
        publishedAt: PropTypes.string,
        source: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        }),
        title: PropTypes.string,
        url: PropTypes.string,
        urlToImage: PropTypes.string
    }).isRequired
}

export default NewsItem;