const React = require('react');

function MovieReviews(props) {
  let reviews = props.reviews.map( review => {
    return (
      <div className='review'>
        {review.display_title}
      </div>
    )
  })

  return (
    <div className='review-list'>
      {reviews}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
