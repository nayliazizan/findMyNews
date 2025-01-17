import CustomCard from "../custom-components/CustomCard";
import PropTypes from "prop-types"; //import to validate component props

function NewsItem({news}) {
    const {source, publishedAt, url, urlToImage, title} = news;
    return (
        //design the news item in customcard component
        <CustomCard author={source.name} date={publishedAt} url={url} urlToImage={urlToImage} content={title}/>
    );
}

//define prop types to validate the props being passed to the component
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
    }).isRequired //define shape of news prop
}

export default NewsItem;