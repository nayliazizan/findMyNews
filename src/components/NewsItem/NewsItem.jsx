function NewsItem({news}) {
    const {source, publishedAt, url, urlToImage, title} = news;
    return (
        <CustomCard author={source.name} date={publishedAt} url={url} urlToImage={urlToImage} content={title}/>
    );
}

export default NewsItem;