import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
    
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=RgqLi43IGiEFx195UAHOzBYdwd6E6Zwm')
    .then(res => res.json())
    .then(reviews => this.setState({reviews: reviews.results}))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
        }
    }
