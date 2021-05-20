import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const [articles, setArticles] = useState('');

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (search) {
            fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=88a8ac67f5674ce2b8fe3ab8dce2b1d5&pageSize=10`)
                .then(response => response.json())
                .then(data => setArticles(data.articles));
        }
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={formSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="What news would you like to see?" onChange={onSearch} />
                            <button className="btn btn-bt" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>

            {articles &&
                articles.map((article) => {
                    return (
                        <div>
                            {article.author}
                        </div>
                    );
                })
            }
        </>
    )
}

export default Search;