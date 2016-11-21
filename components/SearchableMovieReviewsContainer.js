const React = require('react');
const MovieReviews = require('./MovieReviews');
import 'whatwg-fetch'
const { fetch } = require('whatwg-fetch');

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    let input = event.target.value
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=b707f03658394d2ca392b3900ddee307&query=${input}`).then((response) => {
      return response.json()
    }).then((response) => {
      this.setState({
        reviews: response.results
      })
    })
  }
  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form>
          <input type="text" />
          <input type="button" onClick={this.handleClick} />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
