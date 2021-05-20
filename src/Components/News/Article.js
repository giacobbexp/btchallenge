const Article = (props) => {
    const shortenString = (str) => {
        return str.length > 150 ? str.substring(0, 150) + '...' : str;
    }

    const isUrl = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    }

    return (
        <>
            <div className="row article">
                <div className="col-md-3 d-none d-md-block">
                    <a href={props.content.url} target="_blank" rel="noreferrer"><img alt={props.content.title} className="img-fluid" src={props.content.urlToImage} /></a>
                </div>
                <div className="col-12 col-md-9">
                    <a href={props.content.url} target="_blank" rel="noreferrer"><p className="text-muted">{props.content.url}</p></a>
                    <a href={props.content.url} target="_blank" rel="noreferrer"><h5 style={{ color: '#5514b4' }}><strong>{props.content.title}</strong></h5></a>
                    <p>{shortenString(props.content.content)}</p>
                    <p className="text-muted"><small>{props.content.author && <>By {isUrl(props.content.author) ? <a href={props.content.author}>{props.content.author}</a> : props.content.author} - </>}{props.content.publishedAt.substring(0, 10)}</small></p>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Article;