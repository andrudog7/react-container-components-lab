import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = event => {
    event.preventDefault()

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=RgqLi43IGiEFx195UAHOzBYdwd6E6Zwm`)
    .then(res => res.json())
    .then(reviews => console.log(reviews))
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <input type="submit" ></input>
                </form>
                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews}/></div>
        
        )
    }
}