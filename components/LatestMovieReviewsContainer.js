const React = require('react');
const MovieReviews = require('./MovieReviews');
import 'whatwg-fetch'
const { fetch } = require('whatwg-fetch');

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }
  componentWillMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=b707f03658394d2ca392b3900ddee307`).then((response) => {
      return response.json()
    }).then((response) => {
      this.setState({
        reviews: response.results
      })
    })
  }
  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;
